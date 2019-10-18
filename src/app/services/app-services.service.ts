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
  favorites: BehaviorSubject<UUID4[]>;

  constructor() {
    this.isLoggedIn = new BehaviorSubject(Boolean(localStorage.isLoggedIn) || false);

    this.allMovies = new BehaviorSubject(mockdata);

    const favorites = Boolean(sessionStorage.getItem('favorites')) ? sessionStorage.getItem('favorites') : JSON.stringify([]);
    sessionStorage.setItem('favorites', favorites);
    this.favorites = new BehaviorSubject(JSON.parse(favorites));
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

  getFavorites(): Observable<UUID4[]> {
    return this.favorites;
  }

  setFavorites(id: UUID4) {
    const fav = JSON.parse(sessionStorage.getItem('favorites')).concat(id);
    const newFavorites = JSON.stringify(fav);
    sessionStorage.setItem('favorites', newFavorites);
    this.favorites.next(fav);
  }

  removeFavorites(id: UUID4) {
    const fav = JSON.parse(sessionStorage.getItem('favorites')).filter(favID => favID !== id);
    const newFavorites = JSON.stringify(fav);
    sessionStorage.setItem('favorites', newFavorites);
    this.favorites.next(fav);
  }

}
