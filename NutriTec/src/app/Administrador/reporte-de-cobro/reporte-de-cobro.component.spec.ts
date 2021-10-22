import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeCobroComponent } from './reporte-de-cobro.component';

describe('ReporteDeCobroComponent', () => {
  let component: ReporteDeCobroComponent;
  let fixture: ComponentFixture<ReporteDeCobroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteDeCobroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDeCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
