import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/producto.model';
import { ProductManagementService } from 'src/app/Services/product-management.service';

@Component({
  selector: 'app-aprobacion-productos',
  templateUrl: './aprobacion-productos.component.html',
  styleUrls: ['./aprobacion-productos.component.scss']
})
export class AprobacionProductosComponent implements OnInit {

  constructor(private productoServicio: ProductManagementService) { }
  productos: Producto[]=[]

  ngOnInit(): void {
    //this.productoServicio.getProductos().then(res=>this.productos=res)
    this.productos =[{
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
    Aprobacion:1,
    Nombre: "ssss"
    }]
  }

  reject(codigoDeBarras:Number){

  }

  approve(codigoDeBarras:Number){

  }

}
