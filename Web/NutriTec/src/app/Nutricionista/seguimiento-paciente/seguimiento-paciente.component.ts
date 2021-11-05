import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/cliente.model';

@Component({
  selector: 'app-seguimiento-paciente',
  templateUrl: './seguimiento-paciente.component.html',
  styleUrls: ['./seguimiento-paciente.component.scss']
})
export class SeguimientoPacienteComponent implements OnInit {

  constructor(private router : Router) { }

  pacientes: Cliente[]=[]
  ngOnInit(): void {
    this.pacientes=[{
      Nombre: "fewfew",
      Apellido1: "fwef",
      Apellido2: "ewfwef",
      Edad: 3,
      FechaDeNacimiento: new Date(),
      Peso: 2,
      IMC: 1,
      Pais:   "adsdds",
      PesoActual: 8,
      Cintura:  7,
      Cuello:  6,
      Caderas:  4,
      Musculo:  4,
      Grasa:  3,
      ConsumoCalorias:  7,
      Correo:   "dgdg",
      Contrasenna:  "dgdfg",
      Id: 13412412
    },
    {
      Nombre: "fewfew",
      Apellido1: "fwef",
      Apellido2: "ewfwef",
      Edad: 3,
      FechaDeNacimiento: new Date(),
      Peso: 2,
      IMC: 1,
      Pais:   "adsdds",
      PesoActual: 8,
      Cintura:  7,
      Cuello:  6,
      Caderas:  4,
      Musculo:  4,
      Grasa:  3,
      ConsumoCalorias:  7,
      Correo:   "dgdg",
      Contrasenna:  "dgdfg",
      Id: 98765
    },
    {
      Nombre: "fewfew",
      Apellido1: "fwef",
      Apellido2: "ewfwef",
      Edad: 3,
      FechaDeNacimiento: new Date(),
      Peso: 2,
      IMC: 1,
      Pais:   "adsdds",
      PesoActual: 8,
      Cintura:  7,
      Cuello:  6,
      Caderas:  4,
      Musculo:  4,
      Grasa:  3,
      ConsumoCalorias:  7,
      Correo:   "dgdg",
      Contrasenna:  "dgdfg",
      Id: 2222222222
    },
    {
      Nombre: "fewfew",
      Apellido1: "fwef",
      Apellido2: "ewfwef",
      Edad: 3,
      FechaDeNacimiento: new Date(),
      Peso: 2,
      IMC: 1,
      Pais:   "adsdds",
      PesoActual: 8,
      Cintura:  7,
      Cuello:  6,
      Caderas:  4,
      Musculo:  4,
      Grasa:  3,
      ConsumoCalorias:  7,
      Correo:   "dgdg",
      Contrasenna:  "dgdfg",
      Id: 6666666666
    }]
  }


  view(paciente: Cliente){
    this.router.navigate(['/Paciente/' + paciente.Id])
  }

}
