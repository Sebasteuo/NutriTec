import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Cliente } from '../Models/cliente.model';
import { Credenciales } from '../Models/credenciales.model';
import { Nutricionista } from '../Models/nutricionista.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationManagementService {

  newUser: Credenciales = { user: "", password: "", tipo: "", cedula: 0 }
  newNutricionista: Nutricionista = {
    Nombre: "",
    Apellido1:  "",
    Apellido2: "",
    Edad:  0,
    CodigoNutricionista: 0,
    FechaDeNacimiento: new Date(),
    IMC:  0,
    Peso:  0,
    Direccion:  "",
    Foto:  "",
    NumeroTarjetaCredito:  0,
    TipoDeCobro:  0,
    Pais:  "",
    Correo:   "",
    Contrasenna:   "",
    Id:  0

  }
  newCliente:Cliente ={
    Nombre: "",
    Apellido1: "",
    Apellido2: "",
    Edad: 0,
    FechaDeNacimiento: new Date(),
    Peso: 0,
    IMC: 0,
    Pais: "",
    PesoActual: 0,
    Cintura: 0,
    Cuello: 0,
    Caderas: 0,
    Musculo: 0,
    Grasa: 0,
    ConsumoCalorias: 0,
    Correo: "",
    Contrasenna: "",
    Id: 0
  }

  constructor(private router: Router, public toastr: ToastrService, public http: HttpClient) { }
  Users: Credenciales[] = []

  //Hace una consulta en el API para verificar credenciales del usuario y guardar los datos del usuario como cookies
  async login(Credenciales: Credenciales) {
    const body = {
      user: Credenciales.user,
      password: Credenciales.password
    }

    /*await this.http.post(environment.api + "/empleado/checkCredentials", body).toPromise().then(res => {
      if ((res as Empleado[]).length > 0) {
        localStorage.setItem("User", Credenciales.user as unknown as string)
        localStorage.setItem("UserId", (res as Empleado[])[0].cedulaempleado as unknown as string)
        this.http.get(environment.api + "/RolXEmpleado/" + (res as Empleado[])[0].cedulaempleado).toPromise().then(res2 => {
          localStorage.setItem("UserType", (res2 as RolXEmpleado[])[0].nombre as unknown as string)
          this.router.navigate(["/Welcome"])
        })
      }
      else {
        this.http.post(environment.api + "/cliente/checkCredentials", body).toPromise().then(res => {
          if ((res as Cliente[]).length > 0) {
            localStorage.setItem("User", Credenciales.user as unknown as string)
            localStorage.setItem("UserId", (res as Client[])[0].cedulacliente as unknown as string)
            localStorage.setItem("UserType", "Cliente")
            this.router.navigate(["/Compra"])
          }
          else{
            this.toastr.error("Credenciales incorrectas", "Error")
          }
        })
      }
    })*/
  }
  async getClientID(user: Credenciales) {

    var id = ""
    await this.http.post(environment.api + "/usuario/getCedula", user, { responseType: "text" }).toPromise().then(res => {
      id = res

    })

    return id
  }
  logout() {
    localStorage.removeItem("User")
    localStorage.removeItem("UserType")
    localStorage.removeItem("UserId")
    this.router.navigate(["/Welcome"])
  }


  //Envía los datos al API para registrar un cliente 
  async Register(id: number, tipo: string, user: string, password: string) {
    if (tipo && user && password && id) {
      /*this.newCliente.usuario = user
      this.newCliente.contrasenna = password
      this.newCliente.cedulacliente = id
      await this.http.put(environment.api + "/cliente/UpdateCredenciales", this.newCliente).toPromise().then(res => {
        this.toastr.success("Registrado exitosamente", "Exito")
        this.router.navigate(["/Login"])
      }, error => {
        this.toastr.error("No se pudo registrar", "Error")
      })*/
    }


    else {
      this.toastr.error("Debe llenar todos los campos", "Error")
    }
  }
}
