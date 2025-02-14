import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficDetailsComponent } from './traffic-details.component';

describe('TrafficDetailsComponent', () => {
  let component: TrafficDetailsComponent;
  let fixture: ComponentFixture<TrafficDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
