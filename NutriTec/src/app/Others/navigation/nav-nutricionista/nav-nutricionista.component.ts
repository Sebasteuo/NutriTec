import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-nutricionista',
  templateUrl: './nav-nutricionista.component.html',
  styleUrls: ['./nav-nutricionista.component.scss']
})
export class NavNutricionistaComponent implements OnInit {

    
  constructor(private router:Router) { }
  public isCollapsed = true; //Controla la apariencia de la barra de navegación
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("User")
    localStorage.removeItem("UserType")
    this.router.navigate(["/Login"])
  }

}
