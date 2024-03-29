import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatselectorComponent } from './statselector.component';

describe('StatselectorComponent', () => {
  let component: StatselectorComponent;
  let fixture: ComponentFixture<StatselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
