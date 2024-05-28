import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaryCardComponent } from './commentary-card.component';

describe('CommentaryCardComponent', () => {
  let component: CommentaryCardComponent;
  let fixture: ComponentFixture<CommentaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentaryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
