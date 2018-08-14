import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConductorService } from './services/conductor.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { FormsModule } from '@angular/forms';
import { ConductorFormComponent } from './conductor-form/conductor-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ConductoresComponent,
    VehiculosComponent,
    AsignacionesComponent,
    ConductorFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [ConductorFormComponent],
  providers: [ConductorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
