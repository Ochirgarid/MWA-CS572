import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideformComponent } from './rideform.component';

describe('RideformComponent', () => {
  let component: RideformComponent;
  let fixture: ComponentFixture<RideformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RideformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
