import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IMovie } from './../interfaces/movie-data-interface';
import AppServices from '../services/app-services.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @ViewChild("slide", { static : true }) slide: ElementRef;
  @ViewChild("slideII", { static : true }) slideII: ElementRef;
  counter = 2;
  orientation = false;
  movies: IMovie[];
  searchedMovies: IMovie[];

  constructor(private appService: AppServices) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.insertBackgroundImage();
    this.startCarousel();
    this.appService.getAllMovies().subscribe(
      movieArray => { this.movies = movieArray; }
    );
    this.searchMovie();
  }

  searchMovie() {
    this.appService.searchedMovies.subscribe(data => {
      this.searchedMovies = (data && data.length) ? data : null;
    })
  }

  startCarousel() {
    setInterval( () => this.triggerMovement('slide'), 5000);
    setInterval( () => this.triggerMovement('slideII'), 9900);
  }

  triggerMovement (value) {
      this[value].nativeElement.style.background = `url(../../assets/wallpapers/${this.counter}.jpg)`;
      this[value].nativeElement.style.backgroundSize = window.innerWidth <= 768 ? 'contain' : 'cover';
      this[value].nativeElement.style.backgroundRepeat = 'no-repeat';

      if (this.orientation) {
        this[value].nativeElement.classList.remove('slider-left');
        this[value].nativeElement.classList.add('slider-right');
        this.orientation = !this.orientation;
      } else {
        this[value].nativeElement.classList.remove('slider-right');
        this[value].nativeElement.classList.add('slider-left');
        this.orientation = !this.orientation;
      }

      if (this.counter >= 14) {
        this.counter = 1;
      } else {
        this.counter += 1;
      }
  }

  insertBackgroundImage() {
    this.slide.nativeElement.style.background = 'url(../../assets/wallpapers/1.jpg)';
    this.slide.nativeElement.style.backgroundSize = window.innerWidth <= 768 ? 'contain' : 'cover';
    this.slide.nativeElement.style.backgroundRepeat = 'no-repeat';
  }

}
