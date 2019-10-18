import { Component, OnInit } from '@angular/core';
import AppServices from '../services/app-services.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  logo = 'https://res.cloudinary.com/shaolinmkz/image/upload/v1571084574/ALC/google-ship/movie-basket.png';

  isLogin:boolean

  constructor(private appService: AppServices) { }

  ngOnInit() {
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.appService.getLoginStatus().subscribe(value => {
      this.isLogin = value;
    });
  }


  handleSearch(query) {
    this.appService.searchMovie(query).subscribe(data => {
      this.appService.searchedMovies.next(data)
    })
  }
}
