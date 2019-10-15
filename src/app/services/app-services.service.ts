import { Injectable } from '@angular/core';
import mockdata from '../mock-data';
import { IMovie } from '../interfaces/movie-data-interface';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  allMovies: Array<IMovie>;
  singleMovie: IMovie;
  searchResult: IMovie;

  constructor() {
    this.allMovies = mockdata;
  }

  getAllMovies() {
    return this.allMovies;
  }

  getSingleMovie(id) {
    this.singleMovie = this.allMovies.find(movie => movie.id === id);
    return this.singleMovie;
  }

  searchMovie(query) {
    this.searchResult = this.allMovies.find(movie => movie.Title.includes(query));
    return this.searchResult;
  }
}
