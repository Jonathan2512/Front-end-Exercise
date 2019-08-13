import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {ItemPhimComponent} from './../item-phim/item-phim.component'

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  @ViewChildren(ItemPhimComponent) tagListItemPhim : QueryList<ItemPhimComponent>;

  danhSachPhim = [
    { maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh: "assets/images/minions.jpg" },
    { maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh: "assets/images/home.jpg" },
    { maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh: "assets/images/harvie.jpg" },
    { maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh: "assets/images/insideout.jpg" },
  ];

  danhSachLike = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 },
  ]
  constructor() { }

  ngOnInit() {
  }

  getLike(thongTinPhim) {
    console.log(thongTinPhim);
    // DUYET BANG VONG FOR.
    // for (let item of this.danhSachLike) {
    //   if (thongTinPhim.maPhim === item.maPhim) {
    //     item.soLike += 1;
    //     localStorage.setItem("soLike", JSON.stringify(item.soLike));
    //   }
    // }
    // DUYET BANG VONG MAP.
    // this.danhSachLike.map(item => {
    //   if(item.maPhim === thongTinPhim.maPhim){
    //     item.soLike++;
    //   }
    // })
    // Duyet bang ham find. (phai tao doi tuong de hung du lieu tra ve)
    let movie = this.danhSachLike.find(item => item.maPhim === thongTinPhim.maPhim);
    movie.soLike++;
  }

  themPhim(thongTinPhim){
    this.danhSachPhim.push(thongTinPhim);
  }

  viewChildren(){
    this.tagListItemPhim.map( item => {
        if(item.thongTinPhim.maPhim === 2) {
          item.thongTinPhim.gia = 100000;
        }
    })
  }
}
