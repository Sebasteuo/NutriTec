import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobacionProductosComponent } from './Administrador/aprobacion-productos/aprobacion-productos.component';
import { ReporteDeCobroComponent } from './Administrador/reporte-de-cobro/reporte-de-cobro.component';

const routes: Routes = [

  { path: '', redirectTo: 'Login', pathMatch: 'full' }, //Al entrar al localhost, se le agrega a la ruta Welcome
  { path: 'AprobacionProductos', component: AprobacionProductosComponent}, // Se hacen navegables y  los componentes
  { path: 'ReporteCobro', component: ReporteDeCobroComponent}, // Se hacen navegables y  los componentes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
