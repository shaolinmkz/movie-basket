import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  title = "Aquaman";
  genre = "Crime, Action";
  year = "2019";
  rating = "7/10";

  constructor() { }

  ngOnInit() {
  }

}
