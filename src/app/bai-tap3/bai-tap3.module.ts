import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTap3Component } from './bai-tap3.component';
import { BaiTap3HeaderComponent } from './bai-tap3-header/bai-tap3-header.component';
import { BaiTap3ContentsComponent } from './bai-tap3-contents/bai-tap3-contents.component';
import { BaiTap3SidebarComponent } from './bai-tap3-sidebar/bai-tap3-sidebar.component';
import { BaiTap3FooterComponent } from './bai-tap3-footer/bai-tap3-footer.component';



@NgModule({
  declarations: [BaiTap3Component, BaiTap3HeaderComponent, BaiTap3ContentsComponent, BaiTap3SidebarComponent, BaiTap3FooterComponent],
  exports: [
    BaiTap3Component, BaiTap3HeaderComponent, BaiTap3ContentsComponent, BaiTap3SidebarComponent, BaiTap3FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BaiTap3Module { }
