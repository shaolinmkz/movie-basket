import { IMovie } from './../interfaces/movie-data-interface';
  import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import AppServices from '../services/app-services.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @ViewChild("slide", { static : true }) slide: ElementRef;
  counter = 2;
  orientation = false;
  movies: IMovie[];

  constructor(private appService: AppServices) { }

  ngOnInit() {
    this.insertBackgroundImage();
    this.startCarousel();
    this.appService.getAllMovies().subscribe(
      movieArray => { this.movies = movieArray; }
    )
  }

  startCarousel() {
    setInterval( () => this.triggerMovement(), 5000);
  }

  triggerMovement () {
      this.slide.nativeElement.style.background = `url(../../assets/wallpapers/${this.counter}.jpg)`;
      this.slide.nativeElement.style.backgroundSize = window.innerWidth <= 768 ? 'contain' : 'cover';
      this.slide.nativeElement.style.backgroundRepeat = 'no-repeat';

      if (this.orientation) {
        this.slide.nativeElement.classList.remove('slider-left');
        this.slide.nativeElement.classList.add('slider-right');
        this.orientation = !this.orientation;
      } else {
        this.slide.nativeElement.classList.remove('slider-right');
        this.slide.nativeElement.classList.add('slider-left');
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
