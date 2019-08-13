import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-baitap-them-san-pham',
  templateUrl: './baitap-them-san-pham.component.html',
  styleUrls: ['./baitap-them-san-pham.component.scss']
})
export class BaitapThemSanPhamComponent implements OnInit {
  danhSachSanPham : any =  [];
  constructor() { }

  ngOnInit() {
  }
  themSanPham(ms,ten,gia){
    let sanPham = {
      maSP : ms,
      tenSP : ten,
      giaSP : gia
    };
    this.danhSachSanPham.push(sanPham);
    localStorage.setItem("sp", JSON.stringify(this.danhSachSanPham));
  }
}
