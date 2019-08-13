import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap3HeaderComponent } from './bai-tap3-header.component';

describe('BaiTap3HeaderComponent', () => {
  let component: BaiTap3HeaderComponent;
  let fixture: ComponentFixture<BaiTap3HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap3HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap3HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
