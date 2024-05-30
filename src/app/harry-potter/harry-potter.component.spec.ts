import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterComponent } from './harry-potter.component';

describe('HarryPotterComponent', () => {
  let component: HarryPotterComponent;
  let fixture: ComponentFixture<HarryPotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarryPotterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarryPotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
