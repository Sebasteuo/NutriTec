import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeMedidasComponent } from './registro-de-medidas.component';

describe('RegistroDeMedidasComponent', () => {
  let component: RegistroDeMedidasComponent;
  let fixture: ComponentFixture<RegistroDeMedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDeMedidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDeMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
