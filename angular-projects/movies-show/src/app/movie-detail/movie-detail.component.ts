import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: object;
  moviename : string;

  constructor(private route: ActivatedRoute, private mvSvc: MovieService) {
    this.movie = {};
  }

  ngOnInit() {
    this.moviename = this.route.params.subscribe(params => {
      console.log("Parmas are " + JSON.stringify(params.name));
      this.moviename = params['name'];
      // In a real app: dispatch action to load the details here.
    });
    this.movie = this.mvSvc.getMovie(this.moviename);

    console.log("movie are " + JSON.stringify(this.movie));
  }

   ngOnDestroy() {
      // this.movie.unsubscribe();
    }
}
