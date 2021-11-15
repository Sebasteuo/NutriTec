import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { ReporteCobro } from 'src/app/Models/reporte-cobro.model';
import { ReporteManagementService } from 'src/app/Services/reporte-management.service';

@Component({
  selector: 'app-reporte-de-cobro',
  templateUrl: './reporte-de-cobro.component.html',
  styleUrls: ['./reporte-de-cobro.component.scss']
})
export class ReporteDeCobroComponent implements OnInit {

  reportes: ReporteCobro[]=[]
  doc = new jsPDF({ putOnlyUsedFonts: true })
  constructor(private servicioReporte: ReporteManagementService) { }

  ngOnInit(): void {
    this.servicioReporte.getReporte().then(res=>{this.reportes=res})
    this.servicioReporte.generatePDF().then(res=>{this.doc=res})
  }

  downloadPDF() {
    this.doc.save("Reporte de Cobro.pdf")
  }

}
