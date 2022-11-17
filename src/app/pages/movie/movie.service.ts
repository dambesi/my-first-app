import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgeCategory, Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movie?: Movie;
  private movieList: Movie[] = [
    {
      id: 1,
      title: 'Blade Runner',
      year: 1982,
      studio: 'Pixar',
      isInCinema: false,
      ageCategory: AgeCategory.Family,
    },
    {
      id: 2,
      title: 'The Matrix',
      year: 2004,
      studio: 'Disney',
      isInCinema: false,
      ageCategory: AgeCategory.Adult,
    },
  ];

  movieId: number = this.movieList.length;

  constructor() {}

  getList(): Observable<Movie[]> {
    console.log('Movie getList aangeroepen');
    console.log(this.movieList);
    return of(this.movieList);
  }

  getById(id: number): Observable<Movie> {
    console.log('Movie getById aangeroepen');
    console.log(`Movie met ID ${id} gezocht`);
    return of(this.movieList.filter((item) => item.id === id)[0]);
  }

  create(movie: Movie): Observable<any> {
    console.log('Movie create aangeroepen');
    this.movie = { ...movie };
    this.movie.id = ++this.movieId;
    this.movieList.push(this.movie);
    console.log(`Nieuwe movie toegevoegd met ID ${this.movieId}`);
    return of({
      status: 201,
      message: 'success',
    });
  }

  update(movie?: Movie): Observable<any> {
    console.log('Movie update aangeroepen');
    // TO DO: movieList updaten
    console.log(`Movie met ID ${movie?.id} geüpdatet`);
    return of({
      status: 201,
      message: 'success',
    });
  }
}
