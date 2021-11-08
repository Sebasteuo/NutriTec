import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlanDeComida } from '../Models/plan-de-comida.model';
import { Plan } from '../Models/plan.model';
import { ProductoXPlan } from '../Models/producto-xplan.model';
import { Producto } from '../Models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class PlanManagementService {

  constructor(private http: HttpClient) { }
  Plans: PlanDeComida []=[]
  PlanesProd: Plan[]=[]
  newPlan: Plan= {
    id: 0,
    idNutricionista: 0,
    desayuno: [],
    meriendaMatutina: [],
    almuerzo: [],
    meriendaTarde: [],
    cena: [],
    nombre: ""
  }
  ProductosDesayuno: Producto[]=[]
  ProductosMerienda: Producto[]=[]
  ProductosAlmuerzo: Producto[]=[]
  ProductosCena: Producto[]=[]
  ProductosMeriendaTarde: Producto[]=[]
  ProductosXPlan: ProductoXPlan[]=[]
  async getPlanes(){  //Función que obtiene Plans

    await this.http.get(environment.api+"/plandcomida").toPromise().then(res=>{
      this.Plans=JSON.parse(res as string) as PlanDeComida[]
      this.Plans.forEach(plan=>{
        this.getProductoByPlan(plan.idplan, 1).then(res2=>{
          this.newPlan.id=plan.idplan
          this.newPlan.nombre = plan.nombre
          this.newPlan.desayuno = res2
          this.PlanesProd.push()
        })
      })
    
    })
    
    return this.Plans
    
  }
  async getProductoByPlan(idPlan: number, idTiempo: number){
    await this.http.get(environment.api+"/ProductoXPlan/"+idPlan).toPromise().then(res=>{
      this.ProductosXPlan=JSON.parse(res as string) as ProductoXPlan[] 
      this.ProductosXPlan.forEach(producto=>{
        this.ProductosDesayuno.push(producto.codigodbarras)
      })
    })
    return this.ProductosXPlan
  }

  async addPaciente(id : number, codigoNutricionista: number){

    const body = {}
    await this.http.post(environment.api+"/plandcomida", Plan).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Plans=result})})
    return this.Plans;
  }

  async deletePlan(id: number | undefined, codigoNutricionista: number) {
    //this.Plans = this.Plans.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api+'/Plans/'+id).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Plans=result})})
    return this.Plans
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editPlan(Plan: Plan, codigoNutricionista:number) {
    await this.http.put(environment.api+"/Plans", Plan).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Plans=result})})
    return this.Plans
  }


  async asignPlan(idPaciente: number, idPlan: number){
    //await this.http.post(environment.api+"/Plans", Plan).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Plans=result})})
  }
}
