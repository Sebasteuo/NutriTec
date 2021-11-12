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
  selectedZona: string = ""
  zonas: string[]=["Cintura", "Cuello", "Caderas", "Músculo", "Grasa"]
  constructor(private service: ClienteManagementService) { 

  }

  newMedida: Medidas = {  
    zona: "",
    medida: 0,
    fecharegistro: new Date(),
    cedula: 0,
    
  }
  selectedMedida: Medidas = {
    zona: "",
    medida: 0,
    fecharegistro: new Date(),
    cedula: 0,
  }

  medidas: Medidas[]=[]
  editingID: number = 0


  selectZona(zona: string){
    this.selectedZona=zona
  }

  ngOnInit(): void {
    this.service.getmedidas(localStorage.getItem("UserId") as unknown as number).then(res=>{this.medidas=res
      console.log(this.medidas)
    })
   
    
  }

  edit(medida: Medidas){
    this.selectedMedida = medida
    this.editingID = medida.cedula
  }

  submit(){
    this.editingID=0
    this.service.editmedida(this.selectedMedida).then(res=>{this.medidas=res})
  }

  delete(medida: Medidas){
    this.service.deletemedida(medida).then(res=>{this.medidas=res})
  }


  add(){
    this.newMedida.cedula=localStorage.getItem("UserId") as unknown as number
    this.newMedida.zona= this.selectedZona
    this.service.addmedida(this.newMedida).then(res=>{this.medidas=res})
    this.newMedida = {
      zona: "",
      medida: 0,
      fecharegistro: new Date(),
      cedula: 0,
    }
  }

}
