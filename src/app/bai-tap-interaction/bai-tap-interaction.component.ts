import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-interaction',
  templateUrl: './bai-tap-interaction.component.html',
  styleUrls: ['./bai-tap-interaction.component.scss']
})
export class BaiTapInteractionComponent implements OnInit {
  // tao 1 bien de hung gia tri nhan ve va truyen cho modal.
  productModal : any ;
  constructor() { }

  ngOnInit() {
  }

  // nhan ve value cua emitter emitFromList.
  getFromList(product) {
    // gan gia tri nhan ve cho bien da tao.
    this.productModal = product;
    console.log(this.productModal);
  }
}
