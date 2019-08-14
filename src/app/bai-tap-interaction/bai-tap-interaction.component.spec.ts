import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapInteractionComponent } from './bai-tap-interaction.component';

describe('BaiTapInteractionComponent', () => {
  let component: BaiTapInteractionComponent;
  let fixture: ComponentFixture<BaiTapInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
