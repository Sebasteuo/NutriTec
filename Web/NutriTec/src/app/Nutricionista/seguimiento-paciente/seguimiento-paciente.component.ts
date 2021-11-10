import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/cliente.model';
import { PacienteManagementService } from 'src/app/Services/paciente-management.service';

@Component({
  selector: 'app-seguimiento-paciente',
  templateUrl: './seguimiento-paciente.component.html',
  styleUrls: ['./seguimiento-paciente.component.scss']
})
export class SeguimientoPacienteComponent implements OnInit {

  constructor(private router : Router, private pacienteService: PacienteManagementService) { }

  pacientes: Cliente[]=[]
  ngOnInit(): void {
    this.pacienteService.getPacientes(888).then(res=>{this.pacientes=res})
  }


  view(paciente: Cliente){
    this.router.navigate(['/Paciente/' + paciente.cedula])
  }

}
