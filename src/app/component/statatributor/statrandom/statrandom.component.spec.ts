import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatrandomComponent } from './statrandom.component';

describe('StatrandomComponent', () => {
  let component: StatrandomComponent;
  let fixture: ComponentFixture<StatrandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatrandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatrandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
