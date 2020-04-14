import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr>
    <h1>App <small>Css</small></h1>
    <app-css></app-css>
    <hr>
    <app-ng-class></app-ng-class>
    <hr>
    <p appResaltado>
        Hola <small>Mundo</small>
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
