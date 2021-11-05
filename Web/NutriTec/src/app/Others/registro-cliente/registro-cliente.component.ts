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
  ngOnInit(): void {
  }
  onSubmit() {
    var pass = (CryptoJS.MD5(this.newCliente.Contrasenna) as unknown) as string;
    this.authenticationService.Register(this.newCliente.Id as unknown as number,
       "Cliente", this.newCliente.Correo, CryptoJS.enc.Base64.stringify(Crypto.SHA256(pass)));
  }

}
