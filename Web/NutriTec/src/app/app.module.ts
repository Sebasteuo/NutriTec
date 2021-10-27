import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanesComponent } from './Nutricionista/planes/planes.component';
import { PacientesComponent } from './Nutricionista/pacientes/pacientes.component';
import { AprobacionProductosComponent } from './Administrador/aprobacion-productos/aprobacion-productos.component';
import { ReporteDeCobroComponent } from './Administrador/reporte-de-cobro/reporte-de-cobro.component';
import { RegistroDeMedidasComponent } from './Cliente/registro-de-medidas/registro-de-medidas.component';
import { RegistroConsumoComponent } from './Cliente/registro-consumo/registro-consumo.component';
import { RecetasComponent } from './Cliente/recetas/recetas.component';
import { ReporteDeAvanceComponent } from './Cliente/reporte-de-avance/reporte-de-avance.component';
import { NavigationComponent } from './Others/navigation/navigation.component';
import { LoginComponent } from './Others/login/login.component';
import { RegistroClienteComponent } from './Others/registro-cliente/registro-cliente.component';
import { RegistroNutricionistaComponent } from './Others/registro-nutricionista/registro-nutricionista.component';
import { RegistroComponent } from './Others/registro/registro.component';
import { ProductosComponent } from './Compartido/productos/productos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FlatpickrModule } from 'angularx-flatpickr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavAdminComponent } from './Others/navigation/nav-admin/nav-admin.component';
import { NavClienteComponent } from './Others/navigation/nav-cliente/nav-cliente.component';
import { NavNutricionistaComponent } from './Others/navigation/nav-nutricionista/nav-nutricionista.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanesComponent,
    PacientesComponent,
    AprobacionProductosComponent,
    ReporteDeCobroComponent,
    RegistroDeMedidasComponent,
    RegistroConsumoComponent,
    RecetasComponent,
    ReporteDeAvanceComponent,
    NavigationComponent,
    NavAdminComponent,
    NavClienteComponent,
    NavNutricionistaComponent,
    LoginComponent,
    RegistroClienteComponent,
    RegistroNutricionistaComponent,
    RegistroComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    FlatpickrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
