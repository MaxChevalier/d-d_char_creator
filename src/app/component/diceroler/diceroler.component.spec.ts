import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicerolerComponent } from './diceroler.component';

describe('DicerolerComponent', () => {
  let component: DicerolerComponent;
  let fixture: ComponentFixture<DicerolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicerolerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DicerolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
