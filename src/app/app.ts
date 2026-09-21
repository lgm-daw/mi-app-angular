import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Contador } from './contador/contador';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Contador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-app');
  texto = '';
 
}
