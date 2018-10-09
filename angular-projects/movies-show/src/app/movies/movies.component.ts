import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';

import { ReactiveFormsModule, FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import "rxjs/Rx";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: any;
  public searchField: string;

  public constructor(private router: Router, private http: Http, private location: Location) {
    this.movies = [];
  }

  public refresh(query?: any) {
    let url = "https://spring-movies-cf.cfapps.io/";
    if(query && query.target.value) {
      url = "https://spring-movies-cf.cfapps.io/" + query.target.value;
    }
    this.http.get(url)
      .map(result => result.json())
      // .sort(data => data.name === 'searchField')
      .subscribe(result => {
        console.log("result is "+JSON.stringify(result));
        this.movies = result;
      });
  }

  public ngOnInit() {
    this.location.subscribe(() => {
      this.movies = this.refresh();
    });
    this.movies = this.refresh();

    // this.searchField = new FormControl();
    /*this.searchField.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(result => {
        this.movies.filter(function(movie){
            return movie.name.includes(result);
        })
      });*/
  }



  public create() {
    this.router.navigate(["create"]);
  }

  public getDetail(movie: Object) {
    this.router.navigate(["detail", {name: movie.name}]);
  }

}
