import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-cliente',
  templateUrl: './nav-cliente.component.html',
  styleUrls: ['./nav-cliente.component.scss']
})
export class NavClienteComponent implements OnInit {

  
  constructor(private router:Router) { }
  public isCollapsed = true; //Controla la apariencia de la barra de navegación
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("User")
    localStorage.removeItem("UserType")
    localStorage.removeItem("UserId")
    this.router.navigate(["/Login"])
  }

}
