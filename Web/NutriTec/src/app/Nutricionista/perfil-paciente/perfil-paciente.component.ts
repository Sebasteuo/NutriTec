import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Consumo } from 'src/app/Models/consumo.model';
import { Producto } from 'src/app/Models/producto.model';
import { ConsumoService } from 'src/app/Services/consumo.service';
import { ProductManagementService } from 'src/app/Services/product-management.service';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})
export class PerfilPacienteComponent implements OnInit {

  constructor(private consumoService: ConsumoService, private productService: ProductManagementService) { }

  tiempos: string[] = ["Desayuno", "Almuerzo", "Cena", "Merienda"]
  consumos: Consumo[] = []
  editingID: number = 0
  selectedTiempo: string = "Desayuno"
  keyword= "Nombre"
  productos: Producto[]=[]

  ngOnInit(): void {
    this.consumoService.getconsumos().then(res => { this.consumos = res })
    this.consumos = [{
      id:44444,
    fecha: new Date(),
    tiempo: "Desayuno",
    platillo: "Gallo Pinto"

    },{
      id:666666,
    fecha: new Date(),
    tiempo: "Merienda",
    platillo: "Yogurt"
    }],
    this.productService.getProductos().then(res=>{this.productos = res})
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
    Nombre: "acas"
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
    Aprobacion:1,
    Nombre: "hhhh"
    }]

  }
}
