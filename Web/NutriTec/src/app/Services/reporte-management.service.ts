import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { jsPDF } from "jspdf";
import { environment } from 'src/environments/environment';
import { ReporteCobro } from '../Models/reporte-cobro.model';
import autoTable from 'jspdf-autotable'

@Injectable({
  providedIn: 'root'
})
export class ReporteManagementService {

  reporte: ReporteCobro[] = []
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  async getReporte() {  //Función que obtiene Plans
    await this.http.get(environment.api + "/up_PagoNutri").toPromise().then(response => {
      this.reporte = JSON.parse(response as string) as ReporteCobro[]
    })
    return this.reporte
  }
  createHeaders(keys: any) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
      result.push({
        id: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: 65,
        align: "center",
        padding: 0
      });
    }
    return result;
  }


  async generatePDF() {
    var doc = new jsPDF({ orientation: "landscape" })
    doc.setFontSize(10)
    //doc.text("Reporte de Cobro", 10, 20);
    //doc.text("NutriTEC S.A", 10, 26);
    this.getReporte().then(res => {
      this.reporte = res
      var dta2: string[][] = []
      this.reporte.forEach(rep => {
        var line2 = []
        line2.push(rep.CodigoNutricionista as unknown as string)
        line2.push(rep.Correo as unknown as string)
        line2.push(rep.Nombre1 as unknown as string)
        line2.push(rep.Nombre2 as unknown as string)
        line2.push(rep.Apellido1 as unknown as string)
        line2.push(rep.Apellido2 as unknown as string)
        line2.push(rep.NumeroTarjetacredito as unknown as string)
        line2.push(rep.TipoCobro as unknown as string)
        line2.push("$"+rep.montoTotal as unknown as string)
        line2.push(rep.descuento as unknown as string)
        line2.push("$"+rep.montoACobrar as unknown as string)
        dta2.push(line2)

      })
      autoTable(doc, {
        head: [['Cod. Nutri', 'Correo', 'Nombre 1', 'Nombre 2', 'Apellido 1', 'Apellido 2',
          'Número de tarjeta', 'Tipo de cobro', 'Monto total', 'Descuento', 'Monto a cobrar']],
        body: dta2
      });
    })
    return doc
  }
}
