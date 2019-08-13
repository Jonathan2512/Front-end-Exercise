import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2ContactComponent } from './bai-tap2-contact.component';

describe('BaiTap2ContactComponent', () => {
  let component: BaiTap2ContactComponent;
  let fixture: ComponentFixture<BaiTap2ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
