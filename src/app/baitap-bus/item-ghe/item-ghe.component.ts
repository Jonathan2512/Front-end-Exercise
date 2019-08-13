import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {

  @Input() ghe;
  @Output() eventDatGhe = new EventEmitter();
  trangThaiChon: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  chonGhe() {
    this.trangThaiChon = !this.trangThaiChon;
    this.eventDatGhe.emit({ ghe: this.ghe, trangThaiChon: this.trangThaiChon });
  }

}   
