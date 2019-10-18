import { IMovie } from './../interfaces/movie-data-interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AppServices from '../services/app-services.service';
import { BaseComponent } from '../base-component/base-component';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent extends BaseComponent implements OnInit, OnDestroy {

  movie: IMovie;

  constructor(
    private appService: AppServices,
    private router: ActivatedRoute
    ) {
      super();
    }

  ngOnInit() {
    this.addSubscription(
      this.getSingleMovie()
    );
  }


  getSingleMovie() {
    this.router.params.subscribe(({ id }) => {
      this.appService.getSingleMovie(id).subscribe(movie => {
        this.movie = movie;
        console.log(this.movie.videoURL)
      });
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
