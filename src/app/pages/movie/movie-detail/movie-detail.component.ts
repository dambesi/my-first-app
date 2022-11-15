import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  movieId: number | undefined;
  movie$: Observable<Movie> | undefined;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.movieId = Number(params.get('id'));
      console.log(`This is the movie ID ${this.movieId}`);
      this.movie$ = this.movieService.getById(this.movieId);
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
