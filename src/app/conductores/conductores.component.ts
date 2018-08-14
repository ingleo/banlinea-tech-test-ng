import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConductorService } from '../services/conductor.service';
import { Conductor } from '../models/conductor';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ConductorFormComponent } from '../conductor-form/conductor-form.component';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.scss']
})
export class ConductoresComponent implements OnInit {

  private conductores: Conductor[];
  bsModalRef: BsModalRef;

  constructor(public _conductorService: ConductorService, private _modalService: BsModalService) { }

  ngOnInit() {
    this.getConductores();
  }

  /**
  * Funcion para obtener los conductores
  */
  getConductores() {
    this._conductorService.getConductores().subscribe(data => {
      this.conductores = data;
    },
      err => {
        console.log(err)
      },
    );
  }

  /**
  * Funcion para abrir el modal con formulario de conductor
  */
  openModalWithComponent() {
    let obj = {
      nombres: '',
      apellidos: '',
      tipo_documento: '',
      numero_documento: ''
    };
    const initialState = {
      obj,
      title: 'Registrar conductor'
    };
    const config = {
      backdrop: true,
      ignoreBackdropClick: true,
      initialState: initialState
    };
    this.bsModalRef = this._modalService.show(ConductorFormComponent, config);
    this.bsModalRef.content.closeBtnName = 'Cerrar';
    this._modalService.onHide.subscribe(() => {
      this.getConductores();
    });
  }

}
