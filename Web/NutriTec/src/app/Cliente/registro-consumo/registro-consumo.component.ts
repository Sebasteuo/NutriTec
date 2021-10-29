import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Consumo } from 'src/app/Models/consumo.model';
import { Producto } from 'src/app/Models/producto.model';
import { ConsumoService } from 'src/app/Services/consumo.service';
import { ProductManagementService } from 'src/app/Services/product-management.service';

@Component({
  selector: 'app-registro-consumo',
  templateUrl: './registro-consumo.component.html',
  styleUrls: ['./registro-consumo.component.scss']
})
export class RegistroConsumoComponent implements OnInit {

  constructor(private consumoService: ConsumoService, private productService: ProductManagementService) { }

  tiempos: string[] = ["Desayuno", "Almuerzo", "Cena", "Merienda"]
  consumos: Consumo[] = []
  editingID: number = 0
  selectedTiempo: string = "Desayuno"
  keyword= "Nombre"
  productos: Producto[]=[]
  selectedProduct: Producto ={
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
    Aprobacion:0,
    Nombre: ""

  }
  selectedConsumo : Consumo = { id:0,
    fecha: new Date(),
    tiempo: "",
    platillo: ""}
  refresh: Subject<any> = new Subject();
  newConsumo: Consumo = {
    id:0,
    fecha: new Date(),
    tiempo: "",
    platillo: ""
  }
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

  selectTiempo(tiempo: string) {
    this.selectedTiempo = tiempo

  }

  add(){

  }

  edit(consumo: Consumo){
    this.selectedConsumo = consumo
    this.editingID = this.selectedConsumo.id
  }

  submit(){

  
  }
  delete(id: number){

  }

  selectProduct(product: any){
    this.selectProduct = product

  }

}
