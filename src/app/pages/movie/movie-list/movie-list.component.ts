import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] | undefined;
  movies$: Observable<Movie[]> | undefined;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies$ = this.movieService.getListObs();
  }
}
