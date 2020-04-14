import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hols mundo... ngStyle
    </p>

    <button class="btn btn-outline-primary mr-2" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i></button>

    <button class="btn btn-outline-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i></button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano: number = 20;
  cont: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
