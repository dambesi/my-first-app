import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { RandomUser } from './randomuser.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserRoels } from './user.model';

const httpOptions = {
  observe: 'body',
  responseType: 'json',
};

// const randomUser: RandomUser | undefined;

@Injectable({
  providedIn: 'root',
})
export class RandomuserService {
  private randomUser: RandomUser | undefined;
  private userId: number = 0;
  constructor(protected readonly http: HttpClient) {}

  getList(options?: any): Observable<RandomUser[]> {
    const endpoint = environment.randomPersonApiEndpoint;
    console.log(`list ${endpoint}`);
    return this.http
      .get<RandomUser[]>(endpoint, { ...options, ...httpOptions })
      .pipe(
        tap(console.log),
        // mapping response to results = > results is an object inside response.
        map((response: any) => response.results),
        tap(console.log),
        map((results) =>
          // mapping every user inside results to match randomUser model or custom model
          results.map((user: any) => {
            // Exact mapping to randomUser.model.ts
            return (this.randomUser = {
              email: user.email,
              firstName: user.name.first,
              lastName: user.name.last,
              id: user.id,
              role: UserRoels.guest,
            });
            // // Mapping to custom user model
            // return {
            //   email: user.email,
            //   firstName: user.name.first,
            //   lastName: user.name.last,
            // };
          })
        ),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    // return an error observable with a user-facing error message
    return throwError(() => new Error(String(error)));
  }
}
