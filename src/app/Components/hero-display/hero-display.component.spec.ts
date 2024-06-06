import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDisplayComponent } from './hero-display.component';

describe('HeroDisplayComponent', () => {
  let component: HeroDisplayComponent;
  let fixture: ComponentFixture<HeroDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDisplayComponent]
    });
    fixture = TestBed.createComponent(HeroDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
