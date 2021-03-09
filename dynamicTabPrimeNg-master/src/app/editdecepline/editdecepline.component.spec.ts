import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeceplineComponent } from './editdecepline.component';

describe('EditdeceplineComponent', () => {
  let component: EditdeceplineComponent;
  let fixture: ComponentFixture<EditdeceplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdeceplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdeceplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
