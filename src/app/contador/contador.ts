import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.html',
  styleUrls: ['./contador.css']
})
export class Contador {
  count: number = 0;

  incrementar() {
    this.count++;
  }

  decrementar() {
    this.count--;
  }

  reiniciar() {
    this.count = 0;
  }
}
