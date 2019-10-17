import { Component, Input } from '@angular/core';
import { IMovie } from './../interfaces/movie-data-interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input() movies: IMovie[];

  status: boolean;

}
