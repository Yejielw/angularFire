import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitWeatherComponent } from './submit-weather.component';

describe('SubmitWeatherComponent', () => {
  let component: SubmitWeatherComponent;
  let fixture: ComponentFixture<SubmitWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
