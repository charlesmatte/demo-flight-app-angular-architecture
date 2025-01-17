import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LuggageCardComponent } from './luggage-card.component';

describe('LuggageCardComponent', () => {
  let component: LuggageCardComponent;
  let fixture: ComponentFixture<LuggageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuggageCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LuggageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
