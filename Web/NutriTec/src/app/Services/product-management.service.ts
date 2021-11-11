import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductoVitamina } from '../Models/producto-vitamina.model';
import { Producto } from '../Models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http: HttpClient) { }

  productos: Producto[] = []
  productoVitaminas: ProductoVitamina[] = []
  newVitamina: ProductoVitamina = {
    codigodbarras: 0,
    vitaminas: ""
  }

  async getProductos() {  //Función que obtiene clientes
    this.productos = []
    await this.http.get(environment.api + "/producto").toPromise().then(res => {
      this.productos = JSON.parse(res as string) as Producto[]
    })
    return this.productos
  }

  async getProductoByCodigo(codigodbarras: number) {  //Función que obtiene clientes
    await this.http.get(environment.api + "/producto/" + codigodbarras).toPromise().then(res => {
      this.productos = JSON.parse(res as string) as Producto[]
    })
    return this.productos[0]
  }

  async addProducto(Producto: Producto) {
    const body = {}
    await this.http.post(environment.api + "/producto", Producto).toPromise().then(res => {
      var lines = (Producto.vitaminas as unknown as string).split(',')
      lines.forEach(line => {
        this.newVitamina.codigodbarras = Producto.codigodbarras
        this.newVitamina.vitaminas = line 
        this.http.post(environment.api + "/Producto_vitamina", this.newVitamina).toPromise().then(res4 => { })
      })
      this.getProductos().then(result => { this.productos = result })
    })
    return this.productos;
  }

  async deleteProducto(id: number | undefined) {
    //this.productos = this.productos.filter((obj) => obj.cedula !== id);
    await this.http.delete(environment.api + '/producto/' + id).toPromise().then(res => { this.getProductos().then(result => { this.productos = result }) })
    return this.productos
  }

  //Envía los datos modificados al API (esta función se comporta igual a la que account-management.service)
  async editProducto(Producto: Producto) {
    await this.http.put(environment.api + "/producto", Producto).toPromise().then(res => { this.getProductos().then(result => { this.productos = result }) })
    return this.productos
  }

  async aprobarProducto(CodigoDeBarras: Number) {
    await this.http.put(environment.api + "/producto", Producto).toPromise().then(res => { this.getProductos().then(result => { this.productos = result }) })
    return this.productos
  }

  async rechazarProducto(CodigoDeBarras: Number) {
    await this.http.put(environment.api + "/producto", Producto).toPromise().then(res => { this.getProductos().then(result => { this.productos = result }) })
    return this.productos
  }

  async getVitaminas(codigodebarras: number) {
    var vitaminas = ""
    await this.http.get(environment.api + "/producto_vitamina/" + codigodebarras).toPromise().then(res => {
      this.productoVitaminas = JSON.parse(res as string) as ProductoVitamina[]
      this.productoVitaminas.forEach(name => {
        vitaminas = vitaminas.concat(name.vitaminas.toString() + ",")
      })
    })

    return vitaminas
  }
}
