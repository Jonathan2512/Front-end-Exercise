import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap1FooterComponent } from './bai-tap1-footer.component';

describe('BaiTap1FooterComponent', () => {
  let component: BaiTap1FooterComponent;
  let fixture: ComponentFixture<BaiTap1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
