import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Studio } from './studio/studio.model';

@Injectable({
  providedIn: 'root',
})
export class StudioService {
  studios: Studio[] = [
    {
      name: 'Pixar',
      year: 1985,
      isActive: true,
    },
    {
      name: 'Universal',
      year: 1980,
      isActive: true,
    },
    {
      name: 'Disney',
      year: 1950,
      isActive: true,
    },
  ];

  constructor() {}

  getList(): Observable<Studio[]> {
    return of(this.studios);
  }
}
