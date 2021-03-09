import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JahidViComponent } from './jahid-vi.component';

describe('JahidViComponent', () => {
  let component: JahidViComponent;
  let fixture: ComponentFixture<JahidViComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JahidViComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JahidViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
