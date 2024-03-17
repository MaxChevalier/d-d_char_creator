import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatatributorComponent } from './statatributor.component';

describe('StatatributorComponent', () => {
  let component: StatatributorComponent;
  let fixture: ComponentFixture<StatatributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatatributorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatatributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
