import { Component, signal } from '@angular/core';
import { SkButton } from 'stencil-library/sk-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
