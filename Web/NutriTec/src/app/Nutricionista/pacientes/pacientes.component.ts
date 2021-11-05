import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Cliente } from 'src/app/Models/cliente.model';
import { PlanAsignado } from 'src/app/Models/plan-asignado.model';
import { Plan } from 'src/app/Models/plan.model';
import { ClienteManagementService } from 'src/app/Services/cliente-management.service';
import { PacienteManagementService } from 'src/app/Services/paciente-management.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

    keyword = "Nombre"
    clientes: Cliente[]=[]
    pacientes: Cliente[]=[]
    planes: Plan[]=[]
    active = 1
    editingID: number = 0
    refresh: Subject<any> = new Subject();
    selectedPlanAsignado: PlanAsignado={
      idPaciente: 0,
      idPlan: 0,
      fechaInicio: new Date(),
      fechaFinal: new Date()
    }
    planesAsignados: PlanAsignado[]=[]
    newPlanAsignado: PlanAsignado={
      idPaciente: 0,
      idPlan: 0,
      fechaInicio: new Date(),
      fechaFinal: new Date()
    }
    selectedCliente: Cliente={
      Nombre: "",
      Apellido1: "",
      Apellido2: "",
      Edad: 0,
      FechaDeNacimiento: new Date(),
      Peso: 0,
      IMC: 0,
      Pais:   "",
      PesoActual: 0,
      Cintura:  0,
      Cuello:  0,
      Caderas:  0,
      Musculo:  0,
      Grasa:  0,
      ConsumoCalorias:  0,
      Correo:   "",
      Contrasenna:  "",
      Id: 0
    }
  constructor(private clienteService: ClienteManagementService, private pacienteService: PacienteManagementService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().then(res=>{this.clientes= res})
    this.clientes=[{
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

  selectCliente(cliente: any){
    console.log(cliente)
    this.selectedCliente= cliente
  }

  add(id:number){

  }

  addPlan(){
    this.pacienteService.asignPlan(1,2)
  }

  selectPaciente(paciente: Cliente){
    this.newPlanAsignado.idPaciente= paciente.Id
  }

  selectPlan(plan: Plan){
    this.newPlanAsignado.idPlan= plan.id
  }

  edit(plan: PlanAsignado){
    this.selectedPlanAsignado=plan
    this.editingID=plan.idPlan
  }

  submit(){

  }

  delete(PlanAsignado: PlanAsignado){

  }

}
