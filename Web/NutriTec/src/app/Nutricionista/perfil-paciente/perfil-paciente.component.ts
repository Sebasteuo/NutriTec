import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Cliente } from 'src/app/Models/cliente.model';
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

  constructor(private consumoService: ConsumoService, private productService: ProductManagementService, private route: ActivatedRoute,) { }

  tiempos: string[] = ["Desayuno", "Almuerzo", "Cena", "Merienda"]
  consumos: Consumo[] = []
  editingID: number = 0
  selectedTiempo: string = "Desayuno"
  keyword = "Nombre"
  productos: Producto[] = []
  id: number = 0
  cliente: Cliente = {
    Nombre: "",
    Apellido1: "",
    Apellido2: "",
    Edad: 0,
    FechaDeNacimiento: new Date(),
    Peso: 0,
    IMC: 0,
    Pais: "",
    PesoActual: 0,
    Cintura: 0,
    Cuello: 0,
    Caderas: 0,
    Musculo: 0,
    Grasa: 0,
    ConsumoCalorias: 0,
    Correo: "",
    Contrasenna: "",
    Id: 0
  }
  comentario : string = ""

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.consumoService.getconsumos().then(res => { this.consumos = res })
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
    
    this.cliente = {
      Nombre: "fewfew",
      Apellido1: "fwef",
      Apellido2: "ewfwef",
      Edad: 3,
      FechaDeNacimiento: new Date(),
      Peso: 2,
      IMC: 1,
      Pais: "adsdds",
      PesoActual: 8,
      Cintura: 7,
      Cuello: 6,
      Caderas: 4,
      Musculo: 4,
      Grasa: 3,
      ConsumoCalorias: 7,
      Correo: "dgdg",
      Contrasenna: "dgdfg",
      Id: 13412412
    }
  }

  addComment(){
    
  }
}
