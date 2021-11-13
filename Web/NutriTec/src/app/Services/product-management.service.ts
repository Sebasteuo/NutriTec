import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductoVitamina } from '../Models/producto-vitamina.model';
import { Producto } from '../Models/producto.model';
import { Productoxreceta } from '../Models/productoxreceta.model';


@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http: HttpClient) { }

  productos: Producto[] = []
  productoVitaminas: ProductoVitamina[] = []
    productosXreceta: Productoxreceta[] = []
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

  async getProductosPorAprobar() {  //Función que obtiene clientes
    this.productos = []
    await this.http.get(environment.api + "/producto/getProductosPorAprobar").toPromise().then(res => {
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

  async aprobarProducto(producto: Producto) {
    await this.http.put(environment.api + "/producto/AprobarProducto", producto).toPromise().then(res => { this.getProductos().then(result => { this.productos = result }) })
    return this.productos
  }

  async rechazarProducto(producto: Producto) {
    await this.http.put(environment.api + "/producto/RechazarProducto", producto).toPromise().then(res => { this.getProductos().then(result => { this.productos = result }) })
    return this.productos
  }
  async getProductosByReceta(idReceta: number) {
    var prods = [] as Producto[]
    await this.http.get(environment.api + "/productoxreceta/" + idReceta).toPromise().then(res => {
      this.productosXreceta = JSON.parse(res as string) as Productoxreceta[]
      this.productosXreceta.forEach(prod => {
        this.getProductoByCodigo(prod.codigodbarras).then(res2 => {
          prods.push(res2)
        })
      })
    })
    return prods
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
