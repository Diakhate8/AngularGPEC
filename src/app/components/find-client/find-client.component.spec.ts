import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClientComponent } from './find-client.component';

describe('FindClientComponent', () => {
  let component: FindClientComponent;
  let fixture: ComponentFixture<FindClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
