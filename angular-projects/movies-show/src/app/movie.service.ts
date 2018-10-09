import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: any;
  public selectedMovie : any;

  constructor(private http: Http, private location: Location) {
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
        this.movies = result;
      });
  }

  public getMovie(movieName: string){
    let url = "https://spring-movies-cf.cfapps.io/";

    this.http.get(url)
      .map(result => result.json())
      // .sort(data => data.name === 'searchField')
      .subscribe(result => {
        this.movies = result;
        this.selectedMovie = this.movies.find(x=> x.name == movieName);
        console.log("this.selectedMovie" + JSON.stringify(this.selectedMovie));
        return this.selectedMovie;
      });
}
