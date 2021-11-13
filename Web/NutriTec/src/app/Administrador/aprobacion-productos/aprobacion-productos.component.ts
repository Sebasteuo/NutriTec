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
    this.productoServicio.getProductosPorAprobar().then(res=>{this.productos=res
      this.productos.forEach(producto=> {
        this.productoServicio.getVitaminas(producto.codigodbarras).then( res2 => {
          producto.vitaminas = res2
          console.log(res2)
        })
      })
    })
    
  }

  reject(producto: Producto){
    this.productoServicio.rechazarProducto(producto)
  }

  approve(producto: Producto){
    this.productoServicio.aprobarProducto(producto)
  }

}
