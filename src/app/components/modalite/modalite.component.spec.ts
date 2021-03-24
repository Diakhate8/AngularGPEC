import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaliteComponent } from './modalite.component';

describe('ModaliteComponent', () => {
  let component: ModaliteComponent;
  let fixture: ComponentFixture<ModaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
