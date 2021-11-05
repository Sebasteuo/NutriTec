import { Component, OnInit } from '@angular/core';
import * as Crypto from "crypto-js"
import { Nutricionista } from 'src/app/Models/nutricionista.model';
import { AuthenticationManagementService } from 'src/app/Services/authentication-management.service';

@Component({
  selector: 'app-registro-nutricionista',
  templateUrl: './registro-nutricionista.component.html',
  styleUrls: ['./registro-nutricionista.component.scss']
})
export class RegistroNutricionistaComponent implements OnInit {

  constructor(private authenticationService: AuthenticationManagementService) { }
  active = 1
  newNutricionista: Nutricionista={
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

  
  ngOnInit(): void {
  }
  onSubmit() {
    var pass = (CryptoJS.MD5(this.newNutricionista.Contrasenna) as unknown) as string;
    this.authenticationService.Register(this.newNutricionista.Id as unknown as number,
       "Cliente", this.newNutricionista.Correo, CryptoJS.enc.Base64.stringify(Crypto.SHA256(pass)));
  }
}
