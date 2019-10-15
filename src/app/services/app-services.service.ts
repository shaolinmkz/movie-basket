import { Injectable } from '@angular/core';
import { UUID4 } from 'uuid/v4';
import { BehaviorSubject, of } from 'rxjs';
import { IMovie } from './../interfaces/movie-data-interface';
import mockdata from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export default class AppServices {

  allMovies: BehaviorSubject<IMovie[]>;
  singleMovie: BehaviorSubject<IMovie>;
  searchResult: BehaviorSubject<IMovie[]>;
  isLoggedIn: BehaviorSubject<boolean>;

  constructor() { }

  getAllMovies() {
    return of(mockdata);
  }

  getSingleMovie(id: UUID4) {
    const result = this.allMovies.value.find(movie => movie.id === id);

    this.singleMovie.next(result);
  }

  searchMovie(query: string) {
    const result = this.allMovies.value
    .filter(movie => movie.Title.toLowerCase()
    .includes(String(query).toLowerCase()));

    this.searchResult.next(result);
  }

  changeLoginStatus(value: boolean) {
    this.isLoggedIn.next(value);
  }

}
