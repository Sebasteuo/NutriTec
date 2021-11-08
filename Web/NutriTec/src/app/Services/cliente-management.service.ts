import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../Models/cliente.model';
import { Medidas } from '../Models/medidas.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteManagementService {

  constructor(private http: HttpClient) { }

  medidas: Medidas []=[]
  async getmedidas(){  //Función que obtiene clientes

    await this.http.get(environment.api+"/medida").toPromise().then(res=>{
      this.medidas=res as Medidas[]

    
    })
    
    return this.medidas
    
  }

  async addmedida(medida : Medidas){

    const body = {}
    await this.http.post(environment.api+"/medidas", medida).toPromise().then(res=>{this.getmedidas().then(result=>{this.medidas=result})})
    return this.medidas;
  }

  async deletemedida(id: number | undefined) {
    //this.medidas = this.medidas.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api+'/medidas/'+id).toPromise().then(res=>{this.getmedidas().then(result=>{this.medidas=result})})
    return this.medidas
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editmedida(medida: Medidas) {
    await this.http.put(environment.api+"/medidas", medida).toPromise().then(res=>{this.getmedidas().then(result=>{this.medidas=result})})
    return this.medidas

}

  Clientes: Cliente []=[]
  async getClientes(){  //Función que obtiene clientes

    await this.http.get(environment.api+"/Usuario").toPromise().then(res=>{
      this.Clientes=JSON.parse(res as string) as Cliente[]
      this.Clientes.forEach(cliente=>{
        cliente.Edad= this.calcAge(cliente.fechanacimiento)
        console.log(cliente.Edad)
      })
    
    })
    
    return this.Clientes
    
  }
   calcAge(dateString:Date) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
  }

  async addCliente(Cliente : Cliente){

    const body = {}
    await this.http.post(environment.api+"/Clientes", Cliente).toPromise().then(res=>{this.getClientes().then(result=>{this.Clientes=result})})
    return this.Clientes;
  }

  async deleteCliente(id: number | undefined) {
    //this.Clientes = this.Clientes.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api+'/Clientes/'+id).toPromise().then(res=>{this.getClientes().then(result=>{this.Clientes=result})})
    return this.Clientes
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editCliente(Cliente: Cliente) {
    await this.http.put(environment.api+"/Clientes", Cliente).toPromise().then(res=>{this.getClientes().then(result=>{this.Clientes=result})})
    return this.Clientes
  }

  async aprobarCliente(CodigoDeBarras: Number) {
    await this.http.put(environment.api+"/Clientes", Cliente).toPromise().then(res=>{this.getClientes().then(result=>{this.Clientes=result})})
    return this.Clientes
  }

  async rechazarCliente(CodigoDeBarras: Number) {
    await this.http.put(environment.api+"/Clientes", Cliente).toPromise().then(res=>{this.getClientes().then(result=>{this.Clientes=result})})
    return this.Clientes
  }
}