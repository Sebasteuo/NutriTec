import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/producto.model';
import { ProductManagementService } from 'src/app/Services/product-management.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(private productService: ProductManagementService) { 

  }

  newProducto: Producto = {  codigoDeBarras: 0,
    Descripcion:"",
    Porcion:0,
    Energia:0,
    Grasa: 0,
    Sodio: 0,
    Carbohidratos:0,
    Proteina:0,
    Vitaminas: 0,
    Calcio: 0,
    Hierro: 0,
    Aprobacion:0
  }
  selectedProduct: Producto = {
    codigoDeBarras: 0,
    Descripcion:"",
    Porcion:0,
    Energia:0,
    Grasa: 0,
    Sodio: 0,
    Carbohidratos:0,
    Proteina:0,
    Vitaminas: 0,
    Calcio: 0,
    Hierro: 0,
    Aprobacion:0
  }

  products: Producto[]=[]
  editingID: number = 0
  ngOnInit(): void {
    this.productService.getProductos().then(res=>this.products=res)
    this.products =[{
      codigoDeBarras: 4444,
    Descripcion:"jaja",
    Porcion:3,
    Energia:4,
    Grasa: 6,
    Sodio: 9,
    Carbohidratos:1,
    Proteina:4,
    Vitaminas: 5,
    Calcio: 3,
    Hierro: 30,
    Aprobacion:1
    },{
      codigoDeBarras: 3334,
    Descripcion:"jaja",
    Porcion:3,
    Energia:4,
    Grasa: 6,
    Sodio: 9,
    Carbohidratos:1,
    Proteina:4,
    Vitaminas: 5,
    Calcio: 3,
    Hierro: 30,
    Aprobacion:1
    }]
  }

  edit(producto: Producto){
    this.selectedProduct = producto
    this.editingID = producto.codigoDeBarras
  }

  submit(){
    this.editingID=0
    this.productService.editProducto(this.selectedProduct).then(res=>{this.products=res})
  }

  delete(codigoDeBarras:number){
    this.productService.deleteProducto(codigoDeBarras).then(res=>{this.products=res})
  }


  add(){
    this.productService.addProducto(this.newProducto).then(res=>{this.products=res})
    this.selectedProduct = {
      codigoDeBarras: 0,
      Descripcion:"",
      Porcion:0,
      Energia:0,
      Grasa: 0,
      Sodio: 0,
      Carbohidratos:0,
      Proteina:0,
      Vitaminas: 0,
      Calcio: 0,
      Hierro: 0,
      Aprobacion:0
    }
  }

}
