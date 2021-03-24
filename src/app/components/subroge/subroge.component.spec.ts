import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubrogeComponent } from './subroge.component';

describe('SubrogeComponent', () => {
  let component: SubrogeComponent;
  let fixture: ComponentFixture<SubrogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubrogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubrogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
