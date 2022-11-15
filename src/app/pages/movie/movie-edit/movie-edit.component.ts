import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of, Subscription, switchMap, tap } from 'rxjs';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
})
export class MovieEditComponent implements OnInit {
  subscriptionParams?: Subscription;
  movie?: Movie;
  title?: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    // Haal de movie op voor edit
    this.subscriptionParams = this.route.paramMap
      .pipe(
        tap(console.log),
        switchMap((params: ParamMap) => {
          // als we een nieuw item maken is er geen 'id'
          if (!params.get('id')) {
            // maak een lege movie
            return of((this.movie = new Movie()));
          } else {
            // haal de movie met gevraagde id via de api
            return this.movieService.getById(Number(params.get('id')));
          }
        }),
        tap(console.log)
      )
      .subscribe((movie) => {
        this.movie = movie;
        // this.title = movie.name !== '' ? movie.name : 'Nieuwe film'; // verandert de titel van de movie in het edit scherm
        this.title = movie.title ?? 'Nieuwe film'; // verandert de titel van de movie in het edit scherm
      });
  }
  onSubmit(): void {}
}
