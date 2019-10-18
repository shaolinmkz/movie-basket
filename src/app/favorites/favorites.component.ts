import { Component, OnInit } from '@angular/core';
import { IMovie } from './../interfaces/movie-data-interface';
import AppServices from '../services/app-services.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favMovies: IMovie[];
  movies: IMovie[];

  constructor(private appService: AppServices) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getAllMovies();
    this.filterFavorites();
  }

  filterFavorites(): void {
    this.appService.getFavorites().subscribe(data => {
      const filtered = [];
      data.forEach(id => {
        const movie = this.movies.find(movie => movie.id === id);
        if (movie) {
          filtered.push(movie);
        }
      });
      this.favMovies = filtered;
    })
  }

  getAllMovies(): void {
    this.appService.getAllMovies().subscribe(
      movieArray => { this.movies = movieArray; }
    );
  }

}
