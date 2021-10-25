import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
}