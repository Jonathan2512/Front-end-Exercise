import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2CarouselComponent } from './bai-tap2-carousel.component';

describe('BaiTap2CarouselComponent', () => {
  let component: BaiTap2CarouselComponent;
  let fixture: ComponentFixture<BaiTap2CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
