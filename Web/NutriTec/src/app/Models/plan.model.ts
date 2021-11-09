import { Producto } from "./producto.model"

export class Plan {
    id: number = 0
    idNutricionista: number = 0
    desayuno: Producto[]=[]
    meriendaMatutina: Producto[]=[]
    almuerzo: Producto[]=[]
    meriendaTarde: Producto[]=[]
    cena: Producto[]=[]
    nombre: string = ""

}
