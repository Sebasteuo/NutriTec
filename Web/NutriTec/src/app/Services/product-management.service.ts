import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../Models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http: HttpClient) { }

  productos: Producto []=[]
  async getProductos(){  //Función que obtiene clientes

    await this.http.get(environment.api+"/producto").toPromise().then(res=>{
      this.productos=res as Producto[]

    
    })
    
    return this.productos
    
  }

  async addProducto(Producto : Producto){

    const body = {}
    await this.http.post(environment.api+"/productos", Producto).toPromise().then(res=>{this.getProductos().then(result=>{this.productos=result})})
    return this.productos;
  }

  async deleteProducto(id: number | undefined) {
    //this.productos = this.productos.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api+'/productos/'+id).toPromise().then(res=>{this.getProductos().then(result=>{this.productos=result})})
    return this.productos
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editProducto(Producto: Producto) {
    await this.http.put(environment.api+"/productos", Producto).toPromise().then(res=>{this.getProductos().then(result=>{this.productos=result})})
    return this.productos
  }

  async aprobarProducto(CodigoDeBarras: Number) {
    await this.http.put(environment.api+"/productos", Producto).toPromise().then(res=>{this.getProductos().then(result=>{this.productos=result})})
    return this.productos
  }

  async rechazarProducto(CodigoDeBarras: Number) {
    await this.http.put(environment.api+"/productos", Producto).toPromise().then(res=>{this.getProductos().then(result=>{this.productos=result})})
    return this.productos
  }


}
