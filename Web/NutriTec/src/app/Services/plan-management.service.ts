import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NutriXplan } from '../Models/nutri-xplan.model';
import { PlanDeComida } from '../Models/plan-de-comida.model';
import { Plan } from '../Models/plan.model';
import { ProductoXPlan } from '../Models/producto-xplan.model';
import { Producto } from '../Models/producto.model';
import { ProductManagementService } from './product-management.service';

@Injectable({
  providedIn: 'root'
})
export class PlanManagementService {

  constructor(private http: HttpClient, private productoService: ProductManagementService) { }
  Plans: PlanDeComida[] = []
  PlanesProd: Plan[] = []
  newPlan: Plan = {
    id: 0,
    idNutricionista: 0,
    desayuno: [],
    meriendaMatutina: [],
    almuerzo: [],
    meriendaTarde: [],
    cena: [],
    nombre: ""
  }
  ProductosXPlan: ProductoXPlan[] = []
  productos: Producto[] = []
  nutriXplan: NutriXplan = {
    codigonutricionista: 0,
    idplan: 0
  }

  //Retorna los planes completos con los productos para cada tiempo de comida y el codigo nutri
  async getPlanes() {  //Función que obtiene Plans
    await this.http.get(environment.api + "/plandcomida").toPromise().then(res => {
      this.Plans = JSON.parse(res as string) as PlanDeComida[]
      this.Plans.forEach(plan => {
        this.newPlan.id = plan.idplan
        this.newPlan.nombre = plan.nombre
        this.getNutricionistaByPlan(plan.idplan).then(res2 => {
          this.newPlan.idNutricionista = res2
        })
        this.getProductosByPlan(plan.idplan, 1).then(res2 => {
          this.newPlan.desayuno = res2
        })
        this.getProductosByPlan(plan.idplan, 2).then(res2 => {
          this.newPlan.meriendaMatutina = res2
        })
        this.getProductosByPlan(plan.idplan, 3).then(res2 => {
          this.newPlan.almuerzo = res2
        })
        this.getProductosByPlan(plan.idplan, 4).then(res2 => {
          this.newPlan.meriendaTarde = res2
        })
        this.getProductosByPlan(plan.idplan, 5).then(res2 => {
          this.newPlan.cena = res2
        })
        this.PlanesProd.push(this.newPlan)
      })
    })
    return this.PlanesProd
  }
  async getProductosByPlan(idPlan: number, idTiempo: number) {
    await this.http.get(environment.api + "/ProductoXPlan/" + idPlan).toPromise().then(res => {
      this.ProductosXPlan = JSON.parse(res as string) as ProductoXPlan[]
      this.ProductosXPlan.forEach(producto => {
        this.productoService.getProductoByCodigo(producto.codigodbarras).then(res2 => {
          this.productos.push(res2)
        })
      })
    })
    return this.productos
  }

  async getNutricionistaByPlan(idPlan: number) {
    await this.http.get(environment.api + "/Nutricionista_Plan/" + idPlan).toPromise().then(res => {
      this.nutriXplan = JSON.parse(res as string) as NutriXplan
    })
    return this.nutriXplan.codigonutricionista
  }

  async addPlan(plan: Plan) {
    const planD = {
      idplan: plan.id,
      nombre: plan.nombre
    }
    await this.http.post(environment.api + "/plandcomida", planD).toPromise().then(res => {
      const nutri = {
        codigonutricionista: plan.idNutricionista,
        idplan: plan.id
      }
      this.http.post(environment.api + "/Nutricionista_Plan", nutri).toPromise().then(res2 => {
        plan.desayuno.forEach(prod => {
          const prodPlan = {
            idplan : plan.id,
            IdTiempo: 1,
            codigodbarras : prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
        plan.meriendaMatutina.forEach(prod => {
          const prodPlan = {
            idplan : plan.id,
            IdTiempo: 2,
            codigodbarras : prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
        plan.almuerzo.forEach(prod => {
          const prodPlan = {
            idplan : plan.id,
            IdTiempo: 3,
            codigodbarras : prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
        plan.meriendaTarde.forEach(prod => {
          const prodPlan = {
            idplan : plan.id,
            IdTiempo: 4,
            codigodbarras : prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
        plan.cena.forEach(prod => {
          const prodPlan = {
            idplan : plan.id,
            IdTiempo: 5,
            codigodbarras : prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
      })
      this.getPlanes().then(result => {
        this.PlanesProd = result
      })
    })
    return this.Plans;
  }

  async deletePlan(id: number | undefined, codigoNutricionista: number) {
    //this.Plans = this.Plans.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api + '/Plans/' + id).toPromise().then(res => { this.getPlanes().then(result => { this.PlanesProd = result }) })
    return this.Plans
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editPlan(Plan: Plan, codigoNutricionista: number) {
    await this.http.put(environment.api + "/Plans", Plan).toPromise().then(res => { this.getPlanes().then(result => { this.PlanesProd = result }) })
    return this.Plans
  }

  async asignPlan(idPaciente: number, idPlan: number) {
    //await this.http.post(environment.api+"/Plans", Plan).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Plans=result})})
  }
}
