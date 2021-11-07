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

  
  ngOnInit(): void {
  }
  onSubmit() {
    var pass = (CryptoJS.MD5(this.newNutricionista.password) as unknown) as string;
    this.authenticationService.Register(this.newNutricionista.cedula as unknown as number,
       "Cliente", this.newNutricionista.correo, CryptoJS.enc.Base64.stringify(Crypto.SHA256(pass)));
  }
}
