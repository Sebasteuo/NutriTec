import { Producto } from "./producto.model"

export class Receta {
    idreceta : number = 0
    nombre : string = ""
    productos : Producto[] = []
    calorias: number = 0
}
