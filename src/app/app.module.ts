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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ConductoresComponent,
    VehiculosComponent,
    AsignacionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ConductorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
