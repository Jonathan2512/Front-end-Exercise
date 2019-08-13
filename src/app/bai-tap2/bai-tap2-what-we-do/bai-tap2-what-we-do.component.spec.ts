import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2WhatWeDoComponent } from './bai-tap2-what-we-do.component';

describe('BaiTap2WhatWeDoComponent', () => {
  let component: BaiTap2WhatWeDoComponent;
  let fixture: ComponentFixture<BaiTap2WhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2WhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2WhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
