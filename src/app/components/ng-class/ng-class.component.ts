import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  template: `
    <div [ngClass]="alerta" class="alert" role="alert">
    A simple primary alert—check it out!
    </div>
    <button class="btn btn-info m-2" (click)="alerta = 'alert-info'">Info</button>
    <button class="btn btn-success" (click)="alerta = 'alert-success'">Success</button>

    <br><br>

    <h3 [ngClass] = " { 'text-danger': 'propiedades.danger' } ">
      Pedro
    </h3>
<hr>
    <button (click)="propiedades.danger =
    !propiedades.danger"
    type="button" name="button"
    class="btn" [ngClass]="{'btn-danger':propiedades.danger,
    'btn-info':!propiedades.danger}">
    Cambiar
  </button>

  <br><br>
  <hr>
  <h3>Proceso Asincrono</h3>
  <button type="button"

  class="btn btn-primary btn-block mb-md-5"
  (click) = "ejecutar()"
  [disabled] = 'loading'>
    <i [ngClass]="{ 'fa-save':!loading, 'fa-refresh fa-spin':loading}" class="fa"></i>
    <span *ngIf="!loading"> Guardar cambios</span>
    <span *ngIf="loading"> Espere por favor</span>
  </button>
  `,
  styles: []
})
export class NgClassComponent implements OnInit {

  alerta: string = "alert-danger";

  loading: boolean = false;

  propiedades: object = {
    danger: false
  };
  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;

    setTimeout ( () => this.loading = false, 3000);
  }

}
