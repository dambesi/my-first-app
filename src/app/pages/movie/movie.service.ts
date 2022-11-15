import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgeCatergory, Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieId: number = 0;
  movieList: Movie[] = [
    {
      id: ++this.movieId,
      title: 'Blade Runner',
      year: 1982,
      studio: 'Pixer',
      isInCinema: false,
      ageCategory: AgeCatergory.Family,
    },
    {
      id: ++this.movieId,
      title: 'The Matrix',
      year: 2004,
      studio: 'Metro',
      isInCinema: false,
      ageCategory: AgeCatergory.Adult,
    },
  ];

  constructor() {}

  getListObs(): Observable<Movie[]> {
    console.log('Movie getList aangeroepen');
    return of(this.movieList);
  }

  getList(): Movie[] {
    console.log('Movie getList aangeroepen');
    return this.movieList;
  }

  getById(id: number): Observable<Movie> {
    console.log(`Movie met ID ${id} gezocht`);
    return of(this.movieList.filter((item) => item.id === id)[0]);
  }
}
