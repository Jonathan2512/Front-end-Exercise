import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component'


@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @ViewChild(DanhSachPhimComponent, {static : false}) tagListMovie : DanhSachPhimComponent;

  constructor() { }

  ngOnInit() {
  }

  addMovie(maPhim, tenPhim, giaPhim, anhPhim) {
    console.log(maPhim, tenPhim, giaPhim, anhPhim);
    const phim = {
      maPhim : maPhim,
      tenPhim : tenPhim,
      gia : giaPhim,
      hinhAnh : anhPhim
    }
    this.tagListMovie.themPhim(phim);
  }
}
