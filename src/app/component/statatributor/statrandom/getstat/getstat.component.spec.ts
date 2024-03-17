import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstatComponent } from './getstat.component';

describe('GetstatComponent', () => {
  let component: GetstatComponent;
  let fixture: ComponentFixture<GetstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetstatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
