import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Cliente } from '../Models/cliente.model';
import { NutricionistaXPaciente } from '../Models/nutricionista-xpaciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteManagementService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  Clientes: Cliente []=[]
  PacientesXNutricionista: NutricionistaXPaciente[]=[]

  async getPacientes(codigoNutricionista: number){  //Función que obtiene clientes
    this.Clientes = []
    await this.http.get(environment.api+"/puede_tener/"+codigoNutricionista).toPromise().then(res=>{
      this.PacientesXNutricionista=JSON.parse(res as string) as NutricionistaXPaciente[]
      this.PacientesXNutricionista.forEach(paciente=>{
        this.http.get(environment.api+"/Usuario/"+paciente.cedula).toPromise().then(res2=>{
          this.Clientes.push((JSON.parse(res2 as string) as Cliente[])[0])
        })
      })
    })
    return this.Clientes
    
  }

  async addPaciente(id : number, codigoNutricionista: number){

    const body = {codigonutricionista: codigoNutricionista, cedula: id, chatId: id+codigoNutricionista}
    await this.http.post(environment.api+"/puede_tener", body).toPromise().then(res=>{
      this.toastr.success("Paciente agregado correctamente", "Éxito")
      this.getPacientes(codigoNutricionista).then(result=>{this.Clientes=result})
      
    }, error=>{
      this.toastr.error("No se ha podido agregar al paciente", "Error")
    })

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
