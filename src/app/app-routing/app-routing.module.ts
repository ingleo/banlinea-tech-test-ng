import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ConductoresComponent } from '../conductores/conductores.component';
import { VehiculosComponent } from '../vehiculos/vehiculos.component';
import { AsignacionesComponent } from '../asignaciones/asignaciones.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'conductores', component: ConductoresComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'asignaciones', component: AsignacionesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
