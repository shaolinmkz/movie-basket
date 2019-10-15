import { Component, OnInit } from '@angular/core';
import uuid4 from 'uuid/v4'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-basket';
  id: uuid4;

  ngOnInit () {
    this.id = uuid4();
  }
}
