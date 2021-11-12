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
    nombre1:  "",
    nombre2:  "",
    apellido1:  "",
    apellido2:  "",
    Edad:  0,//Falta en el API
    codigonutricionista:  0,
    fechanacimiento:  new Date(),
    IMC: 0, //Falta en el API
    peso:  0,
    direccion:  "",
    foto: "",
    numerotarjetacredito:  0 ,
    tipocobro: 0,
    Pais:  "", //Falta en el API
    correo:   "",
    password:   "",
    cedula:  0

  }
  newCliente:Cliente ={
    nombre1:  "",
    nombre2:  "",
    apellido1:  "",
    apellido2: "",
    Edad:  0,//Falta en el API
    fechanacimiento:new Date(),
    peso:  0,
    IMC:  0,//Falta en el API
    pais:   "",
    altura: 0,
    PesoActual:  0,//Falta en el API
    Cintura:  0,//Falta en el API
    Cuello:  0,//Falta en el API
    Caderas:  0,//Falta en el API
    porcentajemusculo:  0,
    porcentajegrasa:  0,
    ConsumoCalorias:  0, //Falta en el API
    correo:   "",
    password:   "",
    cedula:  0
  }

  constructor(private router: Router, public toastr: ToastrService, public http: HttpClient) { }
  Users: Credenciales[] = []

  //Hace una consulta en el API para verificar credenciales del usuario y guardar los datos del usuario como cookies
  async login(Credenciales: Credenciales) {
    console.log(Credenciales)
    const Admin = {
      
      cedula: Credenciales.cedula as unknown as number,
      statementType: "admin",
      password: Credenciales.password
    }

    const bodyCliente = {

      cedula: Credenciales.cedula  as unknown as number,
      statementType: "cliente",
      password: Credenciales.password
    }

    const bodyNutricionista = {

      cedula: Credenciales.cedula  as unknown as number,
      statementType: "nutricionista",
      password: Credenciales.password
    }

    await this.http.post(environment.api + "/up_LoginCheck", JSON.parse(JSON.stringify(bodyCliente)), {responseType: "text"}).toPromise().then(res => {
    console.log(res)
    console.log(bodyCliente)
      if (JSON.parse(res) == "1") {
        localStorage.setItem("User", Credenciales.user as unknown as string)
        localStorage.setItem("UserId", Credenciales.cedula as unknown as string)
        
          localStorage.setItem("UserType", "cliente")
          this.router.navigate(["/Consumo"])
        
      }
      else {
        this.http.post(environment.api + "/up_LoginCheck", JSON.parse(JSON.stringify(bodyNutricionista)),{responseType: "text"}).toPromise().then(res => {
          if (JSON.parse(res) =="1") {
            localStorage.setItem("User", Credenciales.user as unknown as string)
            localStorage.setItem("UserId", Credenciales.cedula as unknown as string)
            localStorage.setItem("UserType", "nutricionista")
            this.router.navigate(["/Pacientes"])
          }
          else{
            this.toastr.error("Credenciales incorrectas", "Error")
          }
        })
      }
    })
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
  async RegisterCliente(data: Cliente) {
    if (data.correo && data.password && data.cedula) {
      
      await this.http.post(environment.api + "/Usuario", data).toPromise().then(res => {
        this.toastr.success("Registrado exitosamente", "Exito")
        this.router.navigate(["/Login"])
      }, error => {
        this.toastr.error("No se pudo registrar", "Error")
      })
    }


    else {
      this.toastr.error("Debe llenar todos los campos", "Error")
    }
  }
  async RegisterNutricionista(data: Nutricionista) {
    if (data.correo && data.password && data.cedula) {
      
      await this.http.post(environment.api + "/Nutricionista", data).toPromise().then(res => {
        this.toastr.success("Registrado exitosamente", "Exito")
        this.router.navigate(["/Login"])
      }, error => {
        this.toastr.error("No se pudo registrar", "Error")
      })
    }


    else {
      this.toastr.error("Debe llenar todos los campos", "Error")
    }
  }
}
