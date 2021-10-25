import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Medidas } from 'src/app/Models/medidas.model';
import { ClienteManagementService } from 'src/app/Services/cliente-management.service';

@Component({
  selector: 'app-registro-de-medidas',
  templateUrl: './registro-de-medidas.component.html',
  styleUrls: ['./registro-de-medidas.component.scss']
})
export class RegistroDeMedidasComponent implements OnInit {

  refresh: Subject<any> = new Subject();
  constructor(private service: ClienteManagementService) { 

  }

  newMedida: Medidas = {  
    cintura: 0, 
    cuello: 0,
    caderas: 0, 
    musculo:0,
    grasa: 0,
    fecha: new Date(),
    id: 0,
    cliente: 0
  }
  selectedMedida: Medidas = {
    cintura: 0, 
    cuello: 0,
    caderas: 0, 
    musculo:0,
    grasa: 0,
    fecha: new Date(),
    id: 0,
    cliente: 0
  }

  medidas: Medidas[]=[]
  editingID: number = 0
  ngOnInit(): void {
    this.service.getmedidas().then(res=>this.medidas=res)
    this.medidas =[{
      cintura: 0, 
    cuello: 0,
    caderas: 0, 
    musculo:0,
    grasa: 0,
    fecha: new Date(),
    id: 1,
    cliente: 0
    },{
      cintura: 0, 
    cuello: 0,
    caderas: 0, 
    musculo:0,
    grasa: 0,
    fecha: new Date(),
    id: 2,
    cliente: 0
    }]
  }

  edit(medida: Medidas){
    this.selectedMedida = medida
    this.editingID = medida.id
  }

  submit(){
    this.editingID=0
    this.service.editmedida(this.selectedMedida).then(res=>{this.medidas=res})
  }

  delete(codigoDeBarras:number){
    this.service.deletemedida(codigoDeBarras).then(res=>{this.medidas=res})
  }


  add(){
    this.service.addmedida(this.newMedida).then(res=>{this.medidas=res})
    this.newMedida = {
      cintura: 0, 
      cuello: 0,
      caderas: 0, 
      musculo:0,
      grasa: 0,
      fecha: new Date(),
      id: 0,
      cliente: 0
    }
  }

}
