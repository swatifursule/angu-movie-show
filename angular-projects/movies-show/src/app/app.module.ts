import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SortableColumnComponentComponent } from './sortable-column-component/sortable-column-component.component';
import { FilterPipe } from './filter.pipe';
import { FieldsortPipe } from './fieldsort.pipe';

let routes: any = [
  { path: "", component: MoviesComponent },
  { path: "detail", component: MovieDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    SortableColumnComponentComponent,
    FilterPipe,
    FieldsortPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
