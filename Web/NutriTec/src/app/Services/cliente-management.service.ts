import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../Models/cliente.model';
import { Medidas } from '../Models/medidas.model';
import { formatISO, parseISO } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class ClienteManagementService {

  constructor(private http: HttpClient) { }

  medidas: Medidas []=[]
  reporte: Medidas []=[]
  async getmedidas(cedula:number){  //Función que obtiene clientes

    await this.http.get(environment.api+"/registramedidas/"+cedula).toPromise().then(res=>{
      this.medidas=JSON.parse(res as string) as Medidas[]
     
     

    
    })
    
    return this.medidas
    
  }
  async getReportemedidas(cedula:number, inicio: Date, final: Date){  //Función que obtiene clientes

    await this.http.get(environment.api+"/registramedidas/"+cedula).toPromise().then(res=>{
      this.medidas=JSON.parse(res as string) as Medidas[]
      this.medidas.forEach(medida=>{
        if(medida.fecharegistro<inicio && medida.fecharegistro>final){
          this.reporte.push(medida)
        }
      })

    
    })
    
    return this.reporte
    
  }
  async addmedida(medida : Medidas){

    const body = {}
    await this.http.post(environment.api+"/registramedidas", medida).toPromise().then(res=>{this.getmedidas(medida.cedula).then(result=>{this.medidas=result})})
    return this.medidas;
  }

  async deletemedida(medida:Medidas) {
    console.log(medida.fecharegistro)
    const body= {cedula:medida.cedula,
      fecharegistro: medida.fecharegistro,
      zona: medida.zona
    }
    //this.medidas = this.medidas.filter((obj) => obj.cedula !== id);
    await this.http.put(environment.api+'/registramedidas/delete', body).toPromise().then(res=>{this.getmedidas(medida.cedula).then(result=>{this.medidas=result})})
    return this.medidas
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editmedida(medida: Medidas) {
    await this.http.put(environment.api+"/registramedidas", medida).toPromise().then(res=>{this.getmedidas(medida.cedula).then(result=>{this.medidas=result})})
    return this.medidas

}

  Clientes: Cliente []=[]
  async getClientes(){  //Función que obtiene clientes

    await this.http.get(environment.api+"/Usuario").toPromise().then(res=>{
      this.Clientes=JSON.parse(res as string) as Cliente[]
      this.Clientes.forEach(cliente=>{
        cliente.Edad= this.calcAge(cliente.fechanacimiento)
        cliente.IMC = this.calcIMC(cliente.PesoActual, cliente.altura)
      })
    
    })
    
    return this.Clientes
    
  }
  async getClienteByID(id: number){  //Función que obtiene clientes
    await this.http.get(environment.api+"/Usuario/"+id).toPromise().then(res=>{
      this.Clientes=JSON.parse(res as string) as Cliente[]
      this.Clientes.forEach(cliente=>{
        cliente.Edad= this.calcAge(cliente.fechanacimiento)
        cliente.IMC = this.calcIMC(cliente.peso, cliente.altura)
      })
    
    })
    
    return this.Clientes[0]
    
  }
   calcAge(dateString:Date) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
  }

  calcIMC(peso: number, altura: number){
    return peso/(altura*altura)
    
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