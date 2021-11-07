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
    
  }

  reject(codigoDeBarras:Number){

  }

  approve(codigoDeBarras:Number){

  }

}
