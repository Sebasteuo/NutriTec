import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNutricionistaComponent } from './registro-nutricionista.component';

describe('RegistroNutricionistaComponent', () => {
  let component: RegistroNutricionistaComponent;
  let fixture: ComponentFixture<RegistroNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroNutricionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
