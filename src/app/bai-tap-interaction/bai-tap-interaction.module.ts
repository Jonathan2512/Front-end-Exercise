import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapInteractionComponent } from './bai-tap-interaction.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';
import { ModalComponent } from './modal/modal.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PromotionComponent } from './promotion/promotion.component';



@NgModule({
  declarations: [BaiTapInteractionComponent, HeaderComponent, CarouselComponent, LaptopComponent, SmartPhoneComponent, ModalComponent, ProductItemComponent, PromotionComponent],
  exports : [BaiTapInteractionComponent],
  imports: [
    CommonModule
  ]
})
export class BaiTapInteractionModule { }
