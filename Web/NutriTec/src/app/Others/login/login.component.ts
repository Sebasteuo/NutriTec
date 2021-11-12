import { Component, OnInit } from '@angular/core';
import * as Crypto from "crypto-js"
import { Credenciales } from 'src/app/Models/credenciales.model';
import { AuthenticationManagementService } from 'src/app/Services/authentication-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string = ""
  newCredenciales: Credenciales = { user: "", password: "", tipo: "", cedula: 0 }

  constructor(private authenticationService: AuthenticationManagementService) { }

  ngOnInit(): void {
  }

  submit() {
    var pass = (Crypto.MD5(this.password as unknown as string) as unknown) as string;
    this.newCredenciales.password = Crypto.enc.Base64.stringify(Crypto.SHA256(pass))
    this.authenticationService.login(this.newCredenciales);
  }

}

