import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobacionProductosComponent } from './Administrador/aprobacion-productos/aprobacion-productos.component';
import { ReporteDeCobroComponent } from './Administrador/reporte-de-cobro/reporte-de-cobro.component';
import { RecetasComponent } from './Cliente/recetas/recetas.component';
import { RegistroConsumoComponent } from './Cliente/registro-consumo/registro-consumo.component';
import { RegistroDeMedidasComponent } from './Cliente/registro-de-medidas/registro-de-medidas.component';
import { ReporteDeAvanceComponent } from './Cliente/reporte-de-avance/reporte-de-avance.component';
import { ProductosComponent } from './Compartido/productos/productos.component';
import { PacientesComponent } from './Nutricionista/pacientes/pacientes.component';
import { PlanesComponent } from './Nutricionista/planes/planes.component';
import { PacienteManagementService } from './Services/paciente-management.service';

const routes: Routes = [

  { path: '', redirectTo: 'Login', pathMatch: 'full' }, //Al entrar al localhost, se le agrega a la ruta Welcome
  { path: 'AprobacionProductos', component: AprobacionProductosComponent}, // Se hacen navegables y  los componentes
  { path: 'ReporteCobro', component: ReporteDeCobroComponent}, // Se hacen navegables y  los componentes
  { path: 'Productos', component: ProductosComponent}, // Se hacen navegables y  los componentes
  { path: 'Consumo', component: RegistroConsumoComponent}, // Se hacen navegables y  los componentes
  { path: 'Medidas', component: RegistroDeMedidasComponent}, // Se hacen navegables y  los componentes
  { path: 'Avance', component: ReporteDeAvanceComponent}, // Se hacen navegables y  los componentes
  { path: 'Pacientes', component: PacientesComponent}, // Se hacen navegables y  los componentes
  { path: 'Planes', component: PlanesComponent}, // Se hacen navegables y  los componentes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
