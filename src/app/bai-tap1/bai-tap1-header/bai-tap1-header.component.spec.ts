import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap1HeaderComponent } from './bai-tap1-header.component';

describe('BaiTap1HeaderComponent', () => {
  let component: BaiTap1HeaderComponent;
  let fixture: ComponentFixture<BaiTap1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
