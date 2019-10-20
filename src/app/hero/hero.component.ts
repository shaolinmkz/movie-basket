import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie-data-interface';
import { AppServices } from 'src/app/services/app-services.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @ViewChild("slide", { static : true }) slide: ElementRef;
  counter = 2;
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
    setInterval( () => this.triggerMovement('slide'), 6000);
  }

  triggerMovement (value) {
      this[value].nativeElement.style.background = `url(../../assets/wallpapers/${this.counter}.jpg)`;
      this[value].nativeElement.style.backgroundSize = window.innerWidth <= 768 ? 'contain' : 'cover';
      this[value].nativeElement.style.backgroundRepeat = 'no-repeat';

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

  scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

}
