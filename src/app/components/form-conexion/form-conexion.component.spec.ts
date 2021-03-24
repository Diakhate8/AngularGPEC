import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConexionComponent } from './form-conexion.component';

describe('FormConexionComponent', () => {
  let component: FormConexionComponent;
  let fixture: ComponentFixture<FormConexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
