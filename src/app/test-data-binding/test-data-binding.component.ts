import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-data-binding',
  templateUrl: './test-data-binding.component.html',
  styleUrls: ['./test-data-binding.component.scss']
})
export class TestDataBindingComponent implements OnInit {
  email : string = "";
  fullName : string = "";
  constructor() { }

  ngOnInit() {
  }
  submit(fullname) {
    this.fullName = fullname;
  }
}
