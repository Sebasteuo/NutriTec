import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/producto.model';
import { Receta } from 'src/app/Models/receta.model';
import { ProductManagementService } from 'src/app/Services/product-management.service';
import { RecetaManagementService } from 'src/app/Services/receta-management.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  keyword = "nombre"
  productos: Producto[] = []
  selectedProductos: Producto[] = []
  selectedProduct: Producto = {
    codigodbarras: 0,
    descripcion: "",
    porcion: 0,
    energia: 0,
    grasa: 0,
    sodio: 0,
    carbohidratos: 0,
    proteina: 0,
    vitaminas: "",
    calcio: 0,
    hierro: 0,
    aprobado: 0,
    nombre: ""
  }
  selectedReceta: Receta = {
    idreceta: 0,
    nombre: "",
    productos: [],
    calorias:0
  }

  editingID: number = 0
  newReceta: Receta = {
    idreceta: 0,
    nombre: "",
    productos: [],
    calorias:0
  }

  recetas: Receta[] = []
  caloriasTotales: number = 0
  prods : Producto[] = []

  constructor(private productoService: ProductManagementService, private recetaservice: RecetaManagementService) { }

  ngOnInit(): void {
    this.productoService.getProductos().then(res => {
      this.productos = res
      this.productos.forEach(producto => {
        this.productoService.getVitaminas(producto.codigodbarras).then(res2 => {
          producto.vitaminas = res2
        })
      })
      this.productos.map(product => product.nombre = ` ${product.codigodbarras} ${product.nombre}`);
    })
    this.recetaservice.getRecetas().then(res => {
      this.recetas = res
      this.recetas.forEach(receta => {
        this.productoService.getProductosByReceta(receta.idreceta).then(res2 => {
          receta.productos = res2
          /*receta.productos.forEach(prod => {
            console.log("nn")
            console.log(prod.nombre)
          })*/          
        })
      })
    })
  }

  selectProduct(product: Producto) {
    this.selectedProduct = product
    this.selectedProductos.push(product)
    this.caloriasTotales = this.caloriasTotales + product.energia
  }

  add() {
    this.recetaservice.addReceta(this.newReceta, this.selectedProductos).then(res => this.recetas = res)
    this.newReceta = {
      idreceta: 0,
      nombre: "",
      productos: [],
      calorias:0
    }
    this.selectedProductos = []
  }

  edit(receta: Receta) {
    this.selectedReceta = receta
    this.editingID = receta.idreceta
  }

  submit() {

  }


  delete(id: number) {

  }

  deleteProd(producto: Producto) {
    this.selectedProductos = this.selectedProductos.filter(item => item.codigodbarras = producto.codigodbarras)
    this.caloriasTotales = this.caloriasTotales - producto.energia
  }

}
