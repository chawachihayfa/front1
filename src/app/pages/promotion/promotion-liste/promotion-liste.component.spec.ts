import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionListeComponent } from './promotion-liste.component';

describe('PromotionListeComponent', () => {
  let component: PromotionListeComponent;
  let fixture: ComponentFixture<PromotionListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
