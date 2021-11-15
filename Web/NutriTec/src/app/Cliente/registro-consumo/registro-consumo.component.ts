import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Chat } from 'src/app/Models/chat.model';
import { Consumo } from 'src/app/Models/consumo.model';
import { Producto } from 'src/app/Models/producto.model';
import { ChatService } from 'src/app/Services/chat.service';
import { ConsumoService } from 'src/app/Services/consumo.service';
import { ProductManagementService } from 'src/app/Services/product-management.service';

@Component({
  selector: 'app-registro-consumo',
  templateUrl: './registro-consumo.component.html',
  styleUrls: ['./registro-consumo.component.scss']
})
export class RegistroConsumoComponent implements OnInit {

  constructor(private consumoService: ConsumoService, private productService: ProductManagementService, private chatService: ChatService) { }

  tiempos: string[] = ["Desayuno", "Almuerzo", "Cena", "Merienda"]
  consumos: Consumo[] = []
  editingID: number = 0
  selectedTiempo: string = "Desayuno"
  keyword = "nombre"
  productos: Producto[] = []
  chats: Chat[]=[]
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
  selectedConsumo: Consumo = {
    id: 0,
    fecha: new Date(),
    tiempo: "",
    platillo: ""
  }
  refresh: Subject<any> = new Subject();
  newConsumo: Consumo = {
    id: 0,
    fecha: new Date(),
    tiempo: "",
    platillo: ""
  }
  ngOnInit(): void {
    this.consumoService.getconsumos().then(res => { this.consumos = res })
    this.chatService.getChatByClient(localStorage.getItem("UserID")as unknown as number).then(res=>{
      this.chats=res
    })
    this.consumos = [{
      id: 44444,
      fecha: new Date(),
      tiempo: "Desayuno",
      platillo: "Gallo Pinto"

    }, {
      id: 666666,
      fecha: new Date(),
      tiempo: "Merienda",
      platillo: "Yogurt"
    }],
      this.productService.getProductos().then(res => { this.productos = res })

      this.chats = [{
        id:  0,
        codigonutricionista:  0,
        cedulausuario: 0,
        mensaje:"Chao"

      },{
        id:  2,
        codigonutricionista:  0,
        cedulausuario: 0,
        mensaje:"Holitas"

      }]


  }

  selectTiempo(tiempo: string) {
    this.selectedTiempo = tiempo

  }

  add() {

  }

  edit(consumo: Consumo) {
    this.selectedConsumo = consumo
    this.editingID = this.selectedConsumo.id
  }

  submit() {


  }
  delete(id: number) {

  }

  selectProduct(product: any) {
    this.selectProduct = product

  }

}
