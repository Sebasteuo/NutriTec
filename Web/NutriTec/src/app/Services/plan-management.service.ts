import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { NutriXplan } from '../Models/nutri-xplan.model';
import { PlanDeComida } from '../Models/plan-de-comida.model';
import { Plan } from '../Models/plan.model';
import { ProductoXPlan } from '../Models/producto-xplan.model';
import { Producto } from '../Models/producto.model';
import { VistaPlan } from '../Models/vista-plan.model';
import { ProductManagementService } from './product-management.service';

@Injectable({
  providedIn: 'root'
})
export class PlanManagementService {

  constructor(private http: HttpClient, private productoService: ProductManagementService, private toastr: ToastrService) { }

  planes : VistaPlan[] = [] 
  Plans: PlanDeComida[] = []
  plandcomida: PlanDeComida = {
    idplan: 0,
    nombre: ""
  }
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
  async getPlanes(codigonutricionista: number) {  //Función que obtiene Plans
    await this.http.get(environment.api + "/nutricionista_plan/getByNutricionista/" + codigonutricionista).toPromise().then(response => {
      this.planes = JSON.parse(response as string) as VistaPlan[]
    })
    return this.planes
  }

  async getProductosByPlan(idPlan: number) {
    var comidas = {
      desayuno: [] as Producto[],
      meriendaMatutina: [] as Producto[],
      Almuerzo: [] as Producto[],
      MeriendaTarde: [] as Producto[],
      Cena: [] as Producto[]
    }
    await this.http.get(environment.api + "/ProductoXPlan/" + idPlan).toPromise().then(res => {
      this.ProductosXPlan = JSON.parse(res as string) as ProductoXPlan[]
      this.ProductosXPlan.forEach(producto => {
        this.productoService.getProductoByCodigo(producto.codigodbarras).then(res2 => {
          if (producto.IdTiempo == 1)
            comidas.desayuno.push(res2)
          if (producto.IdTiempo == 2)
            comidas.meriendaMatutina.push(res2)
          if (producto.IdTiempo == 3)
            comidas.Almuerzo.push(res2)
          if (producto.IdTiempo == 4)
            comidas.MeriendaTarde.push(res2)
          if (producto.IdTiempo == 5)
            comidas.Cena.push(res2)
        })
      })
    })
    return comidas
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
      this.toastr.success("Se ha registrado correctamente", "exito")
      this.http.post(environment.api + "/Nutricionista_Plan", nutri).toPromise().then(res2 => {
        plan.desayuno.forEach(prod => {
          const prodPlan = {
            idplan: plan.id,
            IdTiempo: 1,
            codigodbarras: prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
        plan.meriendaMatutina.forEach(prod => {
          const prodPlan = {
            idplan: plan.id,
            IdTiempo: 2,
            codigodbarras: prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
        plan.almuerzo.forEach(prod => {
          const prodPlan = {
            idplan: plan.id,
            IdTiempo: 3,
            codigodbarras: prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
        plan.meriendaTarde.forEach(prod => {
          const prodPlan = {
            idplan: plan.id,
            IdTiempo: 4,
            codigodbarras: prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
        plan.cena.forEach(prod => {
          const prodPlan = {
            idplan: plan.id,
            IdTiempo: 5,
            codigodbarras: prod.codigodbarras
          }
          this.http.post(environment.api + "/Productoxplan", prodPlan).toPromise().then(res => {
          })
        })
      })
    }, error => {
      this.toastr.error("No se ha podido registrar correctamente", "error")
    })
    return this.Plans;
  }

  async deletePlan(id: number | undefined, codigoNutricionista: number) {
    //this.Plans = this.Plans.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api + '/Plans/' + id).toPromise().then(res => { this.getPlanes(codigoNutricionista).then(result => { 
       }) })
    return this.Plans
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editPlan(Plan: Plan, codigoNutricionista: number) {
    await this.http.put(environment.api + "/Plans", Plan).toPromise().then(res => { this.getPlanes(codigoNutricionista).then(result => {  }) })
    return this.Plans
  }

  async asignPlan(idPaciente: number, idPlan: number) {
    //await this.http.post(environment.api+"/Plans", Plan).toPromise().then(res=>{this.getPacientes(codigoNutricionista).then(result=>{this.Plans=result})})
  }
}
