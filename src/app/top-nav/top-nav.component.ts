import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  logo = 'https://res.cloudinary.com/shaolinmkz/image/upload/v1571084574/ALC/google-ship/movie-basket.png';

  isLogin:boolean;

  constructor() { }

  ngOnInit() {
  }
}
