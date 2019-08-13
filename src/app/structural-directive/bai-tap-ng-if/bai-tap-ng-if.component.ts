import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bai-tap-ng-if',
  templateUrl: './bai-tap-ng-if.component.html',
  styleUrls: ['./bai-tap-ng-if.component.scss']
})
export class BaiTapNgIfComponent implements OnInit {
  isLogin : boolean = true;
  userName : string = "";

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("user")) {
      this.isLogin = false;
      this.userName = JSON.parse(localStorage.getItem("user"));
    }
  }

  logIn(user,pass) {
    if(user === "cybersoft" && pass ==="cybersoft"){
      this.isLogin = false;
      this.userName = user;
      localStorage.setItem(this.userName, stringify(this.userName));
    }
  }

}
