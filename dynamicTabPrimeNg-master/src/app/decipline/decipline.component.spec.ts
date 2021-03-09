import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeciplineComponent } from './decipline.component';

describe('DeciplineComponent', () => {
  let component: DeciplineComponent;
  let fixture: ComponentFixture<DeciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
