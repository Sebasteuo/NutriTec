import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { jsPDF } from "jspdf";
import { environment } from 'src/environments/environment';
import { ReporteCobro } from '../Models/reporte-cobro.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteManagementService {

  reporte: ReporteCobro[]=[]
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  async getReporte() {  //Función que obtiene Plans
    await this.http.get(environment.api + "/up_PagoNutri").toPromise().then(response => {
      this.reporte = JSON.parse(response as string) as ReporteCobro[]
    })
    return this.reporte
  }
   createHeaders(keys:any) {
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
    
    var headers = [
    
      "Cod.Nutri",
      "Correo",
      "Nombre1",
      "Nombre2",
      "Apellido1",
      "Apellido2",
      "NumeroTarjetacredito",
      "Cobro",
      "montoTotal",
      "descuento",
      "montoACobrar"
    ];

    var doc = new jsPDF({orientation:"landscape"})
    doc.setFontSize(10)
    doc.text("Reporte de Cobro", 10, 20);
    doc.text("NutriTEC S.A", 10, 26);
    this.getReporte().then(res=> {this.reporte=res
      var Data: { [key: string]: string; }[]=[]
      this.reporte.forEach(rep=>{
        var Line={
          "Cod.Nutri": rep.CodigoNutricionista as unknown as string,
      "Correo": rep.Correo as unknown as string,
      "Nombre1": rep.Nombre1 as unknown as string,
      "Nombre2": rep.Nombre2 as unknown as string,
      "Apellido1":rep.Apellido1 as unknown as string,
      "Apellido2": rep.Apellido2 as unknown as string,
      "NumeroTarjetacredito": rep.NumeroTarjetacredito as unknown as string,
      "Cobro": rep.TipoCobro as unknown as string,
      "montoTotal":rep.montoTotal as unknown as string,
      "descuento": rep.descuento as unknown as string,
      "montoACobrar":rep.montoACobrar as unknown as string
        }
        Data.push(Line)
      })
      doc.table(10, 40, Data, headers, { autoSize: false });
    })


    
    return doc
  }
}
