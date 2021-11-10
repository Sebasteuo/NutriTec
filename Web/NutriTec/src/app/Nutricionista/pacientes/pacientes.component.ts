import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Cliente } from 'src/app/Models/cliente.model';
import { PlanAsignado } from 'src/app/Models/plan-asignado.model';
import { Plan } from 'src/app/Models/plan.model';
import { ClienteManagementService } from 'src/app/Services/cliente-management.service';
import { PacienteManagementService } from 'src/app/Services/paciente-management.service';
import { PlanManagementService } from 'src/app/Services/plan-management.service';
import { convertToObject } from 'typescript';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

    keyword = "nombre1"
    keywordPlanes = "nombre"
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
      nombre1:  "",
    nombre2:  "",
    apellido1:  "",
    apellido2: "",
    Edad:  0,//Falta en el API
    fechanacimiento:new Date(),
    peso:  0,
    IMC:  0,//Falta en el API
    pais:   "",
    altura: 0,
    PesoActual:  0,//Falta en el API
    Cintura:  0,//Falta en el API
    Cuello:  0,//Falta en el API
    Caderas:  0,//Falta en el API
    porcentajemusculo:  0,
    porcentajegrasa:  0,
    ConsumoCalorias:  0, //Falta en el API
    correo:   "",
    password:   "",
    cedula:  0
    }
  constructor(private clienteService: ClienteManagementService, private pacienteService: PacienteManagementService, private planservice: PlanManagementService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().then(res=>{this.clientes= res

    })
    this.pacienteService.getPacientes(888).then(res=>{this.pacientes=res
    })

    this.planservice.getPlanes(888).then(res=>{this.planes=res
    console.log(this.planes)
    })
    
  }

  selectCliente(cliente: any){

    this.selectedCliente= cliente
  }

  add(id:number){
    var codigoNutricionista= localStorage.getItem("codigonutricionista")
    this.pacienteService.addPaciente(id, 888)
  }

  addPlan(){
    this.pacienteService.asignPlan(1,2)
  }

  selectPaciente(paciente: Cliente){
    this.newPlanAsignado.idPaciente= paciente.cedula
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
