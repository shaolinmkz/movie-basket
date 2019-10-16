import { Injectable } from '@angular/core';
import { UUID4 } from 'uuid/v4';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { IMovie } from './../interfaces/movie-data-interface';
import mockdata from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export default class AppServices {

  allMovies: BehaviorSubject<IMovie[]>;
  isLoggedIn: BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedIn = new BehaviorSubject(Boolean(localStorage.isLoggedIn) || false);

    this.allMovies = new BehaviorSubject(mockdata);
   }

  getAllMovies(): Observable<IMovie[]> {
    return of(mockdata);
  }

  getSingleMovie(id: UUID4): Observable<IMovie> {
    const result = this.allMovies.value.find(movie => movie.id === id);

    return of(result);
  }

  searchMovie(query: string): Observable<IMovie[]> {
    const result = this.allMovies.value
    .filter(movie => movie.Title.toLowerCase()
    .includes(String(query).toLowerCase()));

    return of(result);
  }

  changeLoginStatus(value: boolean) {
    this.isLoggedIn.next(value);
  }

  getLoginStatus(): Observable<boolean> {
    return this.isLoggedIn
  }

}
