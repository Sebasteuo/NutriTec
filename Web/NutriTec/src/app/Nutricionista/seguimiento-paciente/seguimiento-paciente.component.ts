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
      nombre1:  "sdcsdc",
      nombre2:  "dsc",
      apellido1:  "sdcd",
      apellido2: "sdcsc",
      Edad:  5,//Falta en el API
      fechanacimiento:new Date(),
      peso:  5,
      IMC:  5,//Falta en el API
      pais:   "sdcdsc",
      altura: 5,
      PesoActual:  5,//Falta en el API
      Cintura:  5,//Falta en el API
      Cuello:  5,//Falta en el API
      Caderas:  5,//Falta en el API
      porcentajemusculo:  5,
      porcentajegrasa:  5,
      ConsumoCalorias:  5, //Falta en el API
      correo:   "scsdc",
      password:   "dscdc",
      cedula:  4
    },
    {
      nombre1:  "scsdc",
      nombre2:  "sdcdsc",
      apellido1:  "sdcsdc",
      apellido2: "dscdsc",
      Edad:  3,//Falta en el API
      fechanacimiento:new Date(),
      peso:  3,
      IMC:  3,//Falta en el API
      pais:   "asdas",
      altura: 3,
      PesoActual:  3,//Falta en el API
      Cintura:  3,//Falta en el API
      Cuello:  3,//Falta en el API
      Caderas:  3,//Falta en el API
      porcentajemusculo:  3,
      porcentajegrasa:  3,
      ConsumoCalorias:  3, //Falta en el API
      correo:   "adasd",
      password:   "asdasd",
      cedula:  4,
      
    },
    {
      nombre1:  "asd",
      nombre2:  "asd",
      apellido1:  "asd",
      apellido2: "asd",
      Edad: 55,//Falta en el API
      fechanacimiento:new Date(),
      peso:  44,
      IMC: 555,//Falta en el API
      pais:   "sdcsd",
      altura: 777,
      PesoActual:  7,//Falta en el API
      Cintura:  66,//Falta en el API
      Cuello:  5,//Falta en el API
      Caderas:  56,//Falta en el API
      porcentajemusculo:  56,
      porcentajegrasa:  56,
      ConsumoCalorias:  56, //Falta en el API
      correo:   "ddf",
      password:   "dfvdf",
      cedula:  77
    }]
  }


  view(paciente: Cliente){
    this.router.navigate(['/Paciente/' + paciente.cedula])
  }

}
