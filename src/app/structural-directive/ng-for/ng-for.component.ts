import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  danhSachSinhVien : any = [
    {ten : "Sang", tuoi : "22"},
    {ten : "Tung", tuoi : "23"},
    {ten : "Bach", tuoi : "24"},
    {ten : "Dao", tuoi : "25"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
