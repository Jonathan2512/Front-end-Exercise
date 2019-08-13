import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  status: boolean = true;
  statusLogin: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDiv(){
    this.status = true;
  }
  hideDiv() {
    this.status = false;
  }
  toggle() {
    this.status = !this.status;
  }
  logOut() {
    this.statusLogin = true;;
  }
  logIn() {
    this.statusLogin = false;
  }
}
