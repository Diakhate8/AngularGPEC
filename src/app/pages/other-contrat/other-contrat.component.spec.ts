import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherContratComponent } from './other-contrat.component';

describe('OtherContratComponent', () => {
  let component: OtherContratComponent;
  let fixture: ComponentFixture<OtherContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
