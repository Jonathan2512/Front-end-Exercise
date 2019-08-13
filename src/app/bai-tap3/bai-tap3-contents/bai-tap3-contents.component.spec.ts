import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap3ContentsComponent } from './bai-tap3-contents.component';

describe('BaiTap3ContentsComponent', () => {
  let component: BaiTap3ContentsComponent;
  let fixture: ComponentFixture<BaiTap3ContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap3ContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap3ContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
