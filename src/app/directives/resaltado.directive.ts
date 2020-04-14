import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  elementRef: ElementRef<any>;
  constructor(
  ) {
    console.log('Directives');
    // tslint:disable-next-line: no-unused-expression
    // elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  // @HostListener('mouseenter') mouseEntro() {
  //   this.elementRef.nativeElement.style.backgroundColor = ' yellow ';
  // }
  // @HostListener('mouseleave') mouseSalio() {
  //   this.elementRef.nativeElement.style.backgroundColor = null;
  // }
}
