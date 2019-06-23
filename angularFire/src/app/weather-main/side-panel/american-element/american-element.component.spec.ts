import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanElementComponent } from './american-element.component';

describe('AmericanElementComponent', () => {
  let component: AmericanElementComponent;
  let fixture: ComponentFixture<AmericanElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
