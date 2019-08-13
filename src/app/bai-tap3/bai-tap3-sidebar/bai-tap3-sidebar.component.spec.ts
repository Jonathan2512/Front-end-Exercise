import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap3SidebarComponent } from './bai-tap3-sidebar.component';

describe('BaiTap3SidebarComponent', () => {
  let component: BaiTap3SidebarComponent;
  let fixture: ComponentFixture<BaiTap3SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap3SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap3SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
