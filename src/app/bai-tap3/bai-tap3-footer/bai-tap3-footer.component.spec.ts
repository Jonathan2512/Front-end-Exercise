import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap3FooterComponent } from './bai-tap3-footer.component';

describe('BaiTap3FooterComponent', () => {
  let component: BaiTap3FooterComponent;
  let fixture: ComponentFixture<BaiTap3FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap3FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap3FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
