import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeAvanceComponent } from './reporte-de-avance.component';

describe('ReporteDeAvanceComponent', () => {
  let component: ReporteDeAvanceComponent;
  let fixture: ComponentFixture<ReporteDeAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteDeAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDeAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
