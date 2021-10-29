import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Consumo } from '../Models/consumo.model';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  constructor(private http: HttpClient) { }

  consumos: Consumo []=[]
  async getconsumos(){  //Función que obtiene clientes

    await this.http.get(environment.api+"/consumo").toPromise().then(res=>{
      this.consumos=res as Consumo[]

    
    })
    
    return this.consumos
    
  }

  async addconsumo(consumo : Consumo){

    const body = {}
    await this.http.post(environment.api+"/consumos", consumo).toPromise().then(res=>{this.getconsumos().then(result=>{this.consumos=result})})
    return this.consumos;
  }

  async deleteconsumo(id: number | undefined) {
    //this.consumos = this.consumos.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api+'/consumos/'+id).toPromise().then(res=>{this.getconsumos().then(result=>{this.consumos=result})})
    return this.consumos
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editconsumo(consumo: Consumo) {
    await this.http.put(environment.api+"/consumos", consumo).toPromise().then(res=>{this.getconsumos().then(result=>{this.consumos=result})})
    return this.consumos
  }

}
