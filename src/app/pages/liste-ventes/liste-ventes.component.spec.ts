import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVentesComponent } from './liste-ventes.component';

describe('ListeVentesComponent', () => {
  let component: ListeVentesComponent;
  let fixture: ComponentFixture<ListeVentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeVentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
