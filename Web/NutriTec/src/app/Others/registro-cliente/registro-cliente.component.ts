import { Component, OnInit } from '@angular/core';
import * as Crypto from "crypto-js"
import { Cliente } from 'src/app/Models/cliente.model';
import { AuthenticationManagementService } from 'src/app/Services/authentication-management.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {

  constructor(private authenticationService: AuthenticationManagementService) { }
  active = 1
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
  ngOnInit(): void {
  }
  onSubmit() {
    var pass = (CryptoJS.MD5(this.newCliente.password) as unknown) as string;
    this.authenticationService.Register(this.newCliente.cedula as unknown as number,
       "Cliente", this.newCliente.correo, CryptoJS.enc.Base64.stringify(Crypto.SHA256(pass)));
  }

}
