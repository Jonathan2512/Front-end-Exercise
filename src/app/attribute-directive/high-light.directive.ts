import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "purple;"
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') HoverEvent() {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseleave') LeaveEvent() {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'green');
  }
  @HostBinding('style.backgroundColor') bgColor : string = "red";
}
