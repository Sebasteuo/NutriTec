import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Producto } from '../Models/producto.model';
import { Receta } from '../Models/receta.model';
import { TotalNutricional } from '../Models/total-nutricional.model';
import { ProductManagementService } from './product-management.service';

@Injectable({
  providedIn: 'root'
})
export class RecetaManagementService {

  recetas: Receta[] = []
  total : TotalNutricional = {
    totalCalcio:0,
    totalCarbohidratos:0,
    totalEnergia:0,
    totalGrasa:0,
    totalHierro:0,
    totalProteina:0,
    totalSodio:0
  }

  constructor(private http: HttpClient, private productoService: ProductManagementService, private toastr: ToastrService) { }

  async getRecetas() {  //Función que obtiene Plans
    await this.http.get(environment.api + "/receta").toPromise().then(response => {
      this.recetas = JSON.parse(response as string) as Receta[]
    })
    return this.recetas
  }

  async addReceta(receta: Receta, productos: Producto[]) {
    await this.http.post(environment.api + "/receta", receta).toPromise().then(res => {
      this.toastr.success("Receta agregada correctamente", "Éxito")
      productos.forEach(producto => {
        const body = {
          idreceta: receta.idreceta,
          codigodbarras: producto.codigodbarras
        }
        this.http.post(environment.api + "/productoxreceta", body).toPromise().then(res => {
          this.getRecetas().then(result => { this.recetas = result })
        })
      })
    }, error => {
      this.toastr.error("No se ha podido agregar la receta", "Error")
    })
    return this.recetas;
  }

  async getTotalNutricional(idreceta : number) {  //Función que obtiene Plans
    await this.http.get(environment.api + "/udft_TotalNutricional/" + idreceta).toPromise().then(response => {
      this.total = (JSON.parse(response as string) as TotalNutricional[])[0]
    })
    return this.total
  }
  
}
