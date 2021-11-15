import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Chat } from 'src/app/Models/chat.model';
import { Cliente } from 'src/app/Models/cliente.model';
import { Consumo } from 'src/app/Models/consumo.model';
import { Producto } from 'src/app/Models/producto.model';
import { ChatService } from 'src/app/Services/chat.service';
import { ClienteManagementService } from 'src/app/Services/cliente-management.service';
import { ConsumoService } from 'src/app/Services/consumo.service';
import { ProductManagementService } from 'src/app/Services/product-management.service';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})
export class PerfilPacienteComponent implements OnInit {

  constructor(private consumoService: ConsumoService, private productService: ProductManagementService, private route: ActivatedRoute, private clienteService: ClienteManagementService, private chatService: ChatService) { }

  tiempos: string[] = ["Desayuno", "Almuerzo", "Cena", "Merienda"]
  consumos: Consumo[] = []
  chat: Chat={
    id:  0,
    codigonutricionista:  0,
    cedulausuario: 0,
    mensaje: ""
  }
  editingID: number = 0
  selectedTiempo: string = "Desayuno"
  keyword = "Nombre"
  productos: Producto[] = []
  id: number = 0
  cliente: Cliente = {
    nombre1:  "",
    nombre2:  "",
    apellido1:  "",
    apellido2: "",
    Edad:  0,//Falta en el API
    fechanacimiento:new Date(),
    peso:  0,
    IMC:  0,//Falta en el API
    pais:   "",
    altura: 0,
    PesoActual:  0,//Falta en el API
    Cintura:  0,//Falta en el API
    Cuello:  0,//Falta en el API
    Caderas:  0,//Falta en el API
    porcentajemusculo:  0,
    porcentajegrasa:  0,
    ConsumoCalorias:  0, //Falta en el API
    correo:   "",
    password:   "",
    cedula:  0
  }
  comentario : string = ""

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.consumoService.getconsumos().then(res => { this.consumos = res })
    this.productService.getProductos().then(res => { this.productos = res })
    this.clienteService.getClienteByID(this.id).then(res=> {this.cliente = res})
    
    
  }

  addComment(){
    this.chat.cedulausuario=this.id
    this.chat.codigonutricionista=localStorage.getItem("UserId") as unknown as number
    this.chatService.addComment(this.chat)
  }
}
