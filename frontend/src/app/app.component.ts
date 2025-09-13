import { Component } from '@angular/core';
import { MoviesComponent } from './mods/movies/movies.component';

@Component({
  selector: 'app-root',
  imports: [MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}