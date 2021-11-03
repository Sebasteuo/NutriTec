import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente.model';

@Component({
  selector: 'app-seguimiento-paciente',
  templateUrl: './seguimiento-paciente.component.html',
  styleUrls: ['./seguimiento-paciente.component.scss']
})
export class SeguimientoPacienteComponent implements OnInit {

  constructor() { }

  pacientes: Cliente[]=[]
  ngOnInit(): void {
  }


  view(paciente: Cliente){

  }

}
