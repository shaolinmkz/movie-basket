import { Injectable } from '@angular/core';
import { UUID4 } from 'uuid/v4';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from './../interfaces/movie-data-interface';
import mockdata from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  allMovies: BehaviorSubject<IMovie[]>;
  singleMovie: BehaviorSubject<IMovie>;
  searchResult: BehaviorSubject<IMovie>;
  isLoggedIn: BehaviorSubject<boolean>;

  constructor() {
    this.allMovies.next(mockdata);
    this.isLoggedIn.next(false);
  }

  getAllMovies() {
    return this.allMovies.value;
  }

  getSingleMovie(id: UUID4) {
    const result = this.allMovies.value.find(movie => movie.id === id);

    this.singleMovie.next(result);
  }

  searchMovie(query: string) {
    const result = this.allMovies.value
    .find(movie => movie.Title.toLowerCase()
    .includes(String(query).toLowerCase()));

    this.searchResult.next(result);
  }

  loginStatus() {
    return this.isLoggedIn.value;
  }

  changeLoginStatus(value: boolean) {
    this.isLoggedIn.next(value);
  }

}
