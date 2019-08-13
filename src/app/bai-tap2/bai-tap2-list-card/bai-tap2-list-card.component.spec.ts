import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2ListCardComponent } from './bai-tap2-list-card.component';

describe('BaiTap2ListCardComponent', () => {
  let component: BaiTap2ListCardComponent;
  let fixture: ComponentFixture<BaiTap2ListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2ListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
