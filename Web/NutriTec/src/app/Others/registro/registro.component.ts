import { Component, OnInit } from '@angular/core';
import * as Crypto from "crypto-js"
import { AuthenticationManagementService } from 'src/app/Services/authentication-management.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private authenticationService: AuthenticationManagementService) { }
  active = 1

  ngOnInit(): void {
  }
  


}
