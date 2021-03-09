import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaihanViComponent } from './raihan-vi.component';

describe('RaihanViComponent', () => {
  let component: RaihanViComponent;
  let fixture: ComponentFixture<RaihanViComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaihanViComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaihanViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
