import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/Models/plan.model';
import { Producto } from 'src/app/Models/producto.model';
import { ProductManagementService } from 'src/app/Services/product-management.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  productos: Producto[]=[]
  selectedDesayuno: Producto[]=[]
  selectedMeriendaMatutina: Producto[]=[]
  selectedMeriendaTarde: Producto[]=[]
  selectedAlmuerzo: Producto[]=[]
  selectedCena: Producto[]=[]
  keyword="Nombre"
  newPlan: Plan= {
    id: 0,
    idNutricionista: 0,
    desayuno: [],
    meriendaMatutina: [],
    almuerzo: [],
    meriendaTarde: [],
    cena: [],
    nombre: ""
  }
  caloriasTotales: number = 0
  constructor(private productoService: ProductManagementService) { }

  ngOnInit(): void {
    this.productoService.getProductos().then(res=>{this.productos=res})
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

  selectDesayuno(producto: Producto){
    this.selectedDesayuno.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.Energia
  }
  selectMeriendaMatutina(producto: Producto){
    this.selectedMeriendaMatutina.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.Energia
  }
  selectMeriendaTarde(producto: Producto){
    this.selectedMeriendaTarde.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.Energia
  }
  selectAlmuerzo(producto: Producto){
    this.selectedAlmuerzo.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.Energia
  }
  selectCena(producto: Producto){
    this.selectedCena.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.Energia
  }
  deleteDesayuno(producto:Producto){
    this.selectedDesayuno=this.selectedDesayuno.filter(item=>item.codigoDeBarras= producto.codigoDeBarras)
    this.caloriasTotales=this.caloriasTotales - producto.Energia
  }
  deleteMeriendaMatutina(producto:Producto){
    this.selectedMeriendaMatutina=this.selectedMeriendaMatutina.filter(item=>item.codigoDeBarras= producto.codigoDeBarras)
    this.caloriasTotales=this.caloriasTotales - producto.Energia
  }
  deleteMeriendaTarde(producto:Producto){
    this.selectedMeriendaTarde=this.selectedMeriendaTarde.filter(item=>item.codigoDeBarras= producto.codigoDeBarras)
    this.caloriasTotales=this.caloriasTotales - producto.Energia
  }
  deleteAlmuerzo(producto:Producto){
    this.selectedAlmuerzo=this.selectedAlmuerzo.filter(item=>item.codigoDeBarras= producto.codigoDeBarras)
    this.caloriasTotales=this.caloriasTotales - producto.Energia
  }
  deleteCena(producto:Producto){
    this.selectedCena=this.selectedCena.filter(item=>item.codigoDeBarras= producto.codigoDeBarras)
    this.caloriasTotales=this.caloriasTotales - producto.Energia
  }
  add(){

  }


}
