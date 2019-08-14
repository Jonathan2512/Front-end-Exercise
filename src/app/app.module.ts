import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaiTap1Component } from './bai-tap1/bai-tap1.component';
import { BaiTap1HeaderComponent } from './bai-tap1/bai-tap1-header/bai-tap1-header.component';
import { BaiTap1ContentComponent } from './bai-tap1/bai-tap1-content/bai-tap1-content.component';
import { BaiTap1SidebarComponent } from './bai-tap1/bai-tap1-sidebar/bai-tap1-sidebar.component';
import { BaiTap1FooterComponent } from './bai-tap1/bai-tap1-footer/bai-tap1-footer.component';
import { BaiTap2Component } from './bai-tap2/bai-tap2.component';
import { BaiTap2HeaderComponent } from './bai-tap2/bai-tap2-header/bai-tap2-header.component';
import { BaiTap2CarouselComponent } from './bai-tap2/bai-tap2-carousel/bai-tap2-carousel.component';
import { BaiTap2ListCardComponent } from './bai-tap2/bai-tap2-list-card/bai-tap2-list-card.component';
import { BaiTap2WhatWeDoComponent } from './bai-tap2/bai-tap2-what-we-do/bai-tap2-what-we-do.component';
import { BaiTap2ContactComponent } from './bai-tap2/bai-tap2-contact/bai-tap2-contact.component';
import { BaiTap2FooterComponent } from './bai-tap2/bai-tap2-footer/bai-tap2-footer.component';
import { CardComponent } from './bai-tap2/bai-tap2-list-card/card/card.component';
import { BaiTap3Module } from './bai-tap3/bai-tap3.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { TestDataBindingModule } from './test-data-binding/test-data-binding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
import { AttributeDirectiveModule} from './attribute-directive/attribute-directive.module';
import {BaitapThemSanPhamModule} from './baitap-them-san-pham/baitap-them-san-pham.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ItemCardComponent } from './ng-content/item-card/item-card.component';
import { InteractionModule } from './interaction/interaction.module';
import { BaitapBusModule} from './baitap-bus/baitap-bus.module';
import { BaiTapInteractionModule} from './bai-tap-interaction/bai-tap-interaction.module';

@NgModule({
  declarations: [
    AppComponent,
    BaiTap1Component,
    BaiTap1HeaderComponent,
    BaiTap1ContentComponent,
    BaiTap1SidebarComponent,
    BaiTap1FooterComponent,
    BaiTap2Component,
    BaiTap2HeaderComponent,
    BaiTap2CarouselComponent,
    BaiTap2ListCardComponent,
    BaiTap2WhatWeDoComponent,
    BaiTap2ContactComponent,
    BaiTap2FooterComponent,
    CardComponent,
    NgContentComponent,
    ItemCardComponent
  ],
  imports: [
    BaiTapInteractionModule,
    BaitapBusModule,
    InteractionModule,
    BaitapThemSanPhamModule,
    AttributeDirectiveModule,
    StructuralDirectiveModule,
    DataBindingModule,
    BrowserModule,
    AppRoutingModule,
    BaiTap3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
