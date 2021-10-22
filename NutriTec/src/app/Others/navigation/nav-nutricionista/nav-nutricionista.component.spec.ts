import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNutricionistaComponent } from './nav-nutricionista.component';

describe('NavNutricionistaComponent', () => {
  let component: NavNutricionistaComponent;
  let fixture: ComponentFixture<NavNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavNutricionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
