import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../Models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteManagementService {

  constructor(private http: HttpClient) { }
  Clientes: Cliente []=[]
  async getPacientes(codigoNutricionista: number){  //Función que obtiene clientes

    await this.http.get(environment.api+"/Cliente").toPromise().then(res=>{
      this.Clientes=res as Cliente[]

    
    })
    
    return this.Clientes
    
  }

  async addPaciente(id : number, codigoNutricionista: number){

    const body = {}
    await this.http.post(environment.api+"/Clientes", Cliente).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Clientes=result})})
    return this.Clientes;
  }

  async deleteCliente(id: number | undefined, codigoNutricionista: number) {
    //this.Clientes = this.Clientes.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api+'/Clientes/'+id).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Clientes=result})})
    return this.Clientes
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editCliente(Cliente: Cliente, codigoNutricionista:number) {
    await this.http.put(environment.api+"/Clientes", Cliente).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Clientes=result})})
    return this.Clientes
  }


  async asignPlan(idPaciente: number, idPlan: number){
    //await this.http.post(environment.api+"/Clientes", Cliente).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Clientes=result})})
  }

 
}
