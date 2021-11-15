import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Medidas } from 'src/app/Models/medidas.model';
import { ClienteManagementService } from 'src/app/Services/cliente-management.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-reporte-de-avance',
  templateUrl: './reporte-de-avance.component.html',
  styleUrls: ['./reporte-de-avance.component.scss']
})
export class ReporteDeAvanceComponent implements OnInit {

  constructor(private clienteService: ClienteManagementService) { }
  reporte: Medidas[]=[]
  inicio: Date = new Date()
  final: Date = new Date()
  refresh: Subject<any> = new Subject();
  doc = new jsPDF({ putOnlyUsedFonts: true })
  ngOnInit(): void {
    
  }

   getReporte(){
    this.clienteService.getReportemedidas(localStorage.getItem("UserId") as unknown as number, this.inicio, this.final).then(res=>{
      this.reporte=res
    })
  }

  downloadPDF() {
    this.doc.save("Reporte de Cobro.pdf")
  }

}
