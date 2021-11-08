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

  newProducto: Producto = {  codigodbarras: 0,
    descripcion:"",
    porcion:0,
    energia:0,
    grasa: 0,
    sodio: 0,
    carbohidratos:0,
    proteina:0,
    vitaminas: 0,
    calcio: 0,
    hierro: 0,
    aprobado:0,
    nombre: ""
  }
  selectedProduct: Producto = {
    codigodbarras: 0,
    descripcion:"",
    porcion:0,
    energia:0,
    grasa: 0,
    sodio: 0,
    carbohidratos:0,
    proteina:0,
    vitaminas: 0,
    calcio: 0,
    hierro: 0,
    aprobado:0,
    nombre: ""
  }

  products: Producto[]=[]
  editingID: number = 0
  ngOnInit(): void {
    this.productService.getProductos().then(res=>this.products=res)
    
  }

  edit(producto: Producto){
    this.selectedProduct = producto
    this.editingID = producto.codigodbarras
  }

  submit(){
    this.editingID=0
    this.productService.editProducto(this.selectedProduct).then(res=>{this.products=res})
  }

  delete(codigodbarras:number){
    this.productService.deleteProducto(codigodbarras).then(res=>{this.products=res})
  }


  add(){
    this.productService.addProducto(this.newProducto).then(res=>{this.products=res})
    this.newProducto = {
      codigodbarras: 0,
      descripcion:"",
      porcion:0,
      energia:0,
      grasa: 0,
      sodio: 0,
      carbohidratos:0,
      proteina:0,
      vitaminas: 0,
      calcio: 0,
      hierro: 0,
      aprobado:0,
      nombre: ""
    }
  }

}
