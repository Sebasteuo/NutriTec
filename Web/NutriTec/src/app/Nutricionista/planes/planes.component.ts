import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/Models/plan.model';
import { Producto } from 'src/app/Models/producto.model';
import { PacienteManagementService } from 'src/app/Services/paciente-management.service';
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
    
  }

  selectDesayuno(producto: Producto){
    this.selectedDesayuno.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.energia
  }
  selectMeriendaMatutina(producto: Producto){
    this.selectedMeriendaMatutina.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.energia
  }
  selectMeriendaTarde(producto: Producto){
    this.selectedMeriendaTarde.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.energia
  }
  selectAlmuerzo(producto: Producto){
    this.selectedAlmuerzo.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.energia
  }
  selectCena(producto: Producto){
    this.selectedCena.push(producto) 
    this.caloriasTotales=this.caloriasTotales + producto.energia
  }
  deleteDesayuno(producto:Producto){
    this.selectedDesayuno=this.selectedDesayuno.filter(item=>item.codigodbarras= producto.codigodbarras)
    this.caloriasTotales=this.caloriasTotales - producto.energia
  }
  deleteMeriendaMatutina(producto:Producto){
    this.selectedMeriendaMatutina=this.selectedMeriendaMatutina.filter(item=>item.codigodbarras= producto.codigodbarras)
    this.caloriasTotales=this.caloriasTotales - producto.energia
  }
  deleteMeriendaTarde(producto:Producto){
    this.selectedMeriendaTarde=this.selectedMeriendaTarde.filter(item=>item.codigodbarras= producto.codigodbarras)
    this.caloriasTotales=this.caloriasTotales - producto.energia
  }
  deleteAlmuerzo(producto:Producto){
    this.selectedAlmuerzo=this.selectedAlmuerzo.filter(item=>item.codigodbarras= producto.codigodbarras)
    this.caloriasTotales=this.caloriasTotales - producto.energia
  }
  deleteCena(producto:Producto){
    this.selectedCena=this.selectedCena.filter(item=>item.codigodbarras= producto.codigodbarras)
    this.caloriasTotales=this.caloriasTotales - producto.energia
  }
  add(){

  }


}
