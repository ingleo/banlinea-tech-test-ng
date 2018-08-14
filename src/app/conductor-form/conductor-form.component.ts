import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ConductorService } from '../services/conductor.service';
import { Conductor } from '../models/conductor';

@Component({
  selector: 'app-conductor-form',
  templateUrl: './conductor-form.component.html',
  styleUrls: ['./conductor-form.component.scss']
})
export class ConductorFormComponent implements OnInit {

  title: string;
  closeBtnName: string;
  obj: any;

  constructor(public bsModalRef: BsModalRef, public _conductorService: ConductorService) {

  }

  ngOnInit() {
  }

  agregarConductor() {

    let conductorObj = new Conductor();
    conductorObj.nombres = this.obj.nombres;
    conductorObj.apellidos = this.obj.apellidos;
    conductorObj.tipo_documento = this.obj.tipo_documento;
    conductorObj.numero_documento = this.obj.numero_documento;

    this._conductorService.createConductor(conductorObj).subscribe(data => {
      console.log(data);
    },
      err => {
        console.log(err);
      }
    );

    this.bsModalRef.hide();
  }

  get diagnostic() { return JSON.stringify(this.obj); }

}
