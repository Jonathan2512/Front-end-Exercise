import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDataBindingComponent } from './test-data-binding.component';



@NgModule({
  declarations: [TestDataBindingComponent],
  exports : [TestDataBindingComponent],
  imports: [
    CommonModule
  ]
})
export class TestDataBindingModule { }
