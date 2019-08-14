import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  @Output() emitFromItem = new EventEmitter();

  showStatus : boolean = true;
  constructor() { }

  ngOnInit() {
   
  }
  // tra ve product hien tai
  returnCurrentItem() {
    this.emitFromItem.emit(this.product)
  }

  changeStatus() {
    this.showStatus = !this.showStatus;
  }
}


