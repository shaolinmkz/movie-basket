import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  logo:string;
  isLogin:boolean;

  constructor() { }

  ngOnInit() {
    this.logo = 'https://res.cloudinary.com/shaolinmkz/image/upload/v1571084574/ALC/google-ship/movie-basket.png';
  }

}
