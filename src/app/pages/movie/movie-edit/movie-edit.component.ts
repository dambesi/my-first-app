import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { Movie, AgeCategory } from '../movie.model';
import { MovieService } from '../movie.service';
import { Studio } from '../../studio/studio.model';
import { StudioService } from '../../studio.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
})
export class MovieEditComponent implements OnInit, OnDestroy {
  subscriptionParams?: Subscription;
  movie = new Movie();
  movie$?: Observable<Movie>;
  studios$?: Observable<Studio[]>;
  ageCategory: string[] = Object.values(AgeCategory);
  existingMovieTitle$?: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private studioService: StudioService
  ) {}

  ngOnInit(): void {
    // Haal de studio's op
    this.studios$ = this.studioService.getList();
    // Haal de movie op voor edit
    this.subscriptionParams = this.route.paramMap
      .pipe(
        tap(console.log),
        switchMap((params: ParamMap) => {
          // als we een nieuw item maken is er geen 'id'
          if (!params.get('id')) {
            // maak een lege movie
            // return of(this.movie);
            return of(this.movie);
          } else {
            // haal de movie met gevraagde id via de api
            return this.movieService.getById(Number(params.get('id')));
          }
        }),
        tap(console.log)
      )
      .subscribe((movie) => {
        // Spread operator om deep copy van movie te maken => op deze manier wordt
        // de movie niet geupdatet bij een "Cancel" of zonder dat een update() uitegevoerd wordt.
        this.movie = { ...movie };
      });
  }
  // Save movie via the service
  onSubmit(): void {
    console.log('onSubmit', this.movie);
    // Update exiting movie
    if (this.movie.id != 0) {
      this.movieService
        .update(this.movie)
        .pipe(
          catchError((error: any) => {
            console.log(error);
            throw 'error in source. Details: ' + error;
            // this.alertService.error(error.message);
            // return of(false);
          })
        )
        .subscribe((success: any) => {
          console.log(success);
          if (success) {
            this.router.navigate(['..'], { relativeTo: this.route });
          }
        });
    }
    // Create a new movie
    else {
      this.movieService
        .create(this.movie)
        .pipe(
          catchError((error: any) => {
            console.log(error);
            throw 'error in source. Details: ' + error;
            // this.alertService.error(error.message);
            // return of(false);
          })
        )
        .subscribe((success: any) => {
          console.log(success);
          if (success) {
            this.router.navigate(['..'], { relativeTo: this.route });
          }
        });
    }
  }
  ngOnDestroy(): void {
    this.subscriptionParams?.unsubscribe;
  }
}
