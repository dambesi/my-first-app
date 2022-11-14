import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserGender, UserRoels } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  readonly Users: User[] = [
    {
      id: 1,
      firstName: 'Sam',
      lastName: 'de Vries',
      emailAdres: 'sam.devries@email.com',
      gender: UserGender.male,
      role: UserRoels.adim,
    },
    {
      id: 2,
      firstName: 'Sanne',
      lastName: 'de Vries',
      emailAdres: 'sanne.devries@email.com',
      gender: UserGender.female,
      role: UserRoels.adim,
    },
    {
      id: 3,
      firstName: 'Susan',
      lastName: 'de Vries',
      emailAdres: 'susan.devries@email.com',
      gender: UserGender.male,
      role: UserRoels.adim,
    },
  ];
  constructor() {}

  getAll(): User[] {
    return this.Users;
  }

  // // met observable
  // getById(id: Number): Observable<User> {
  //   const result = this.Users.filter((item) => item.id === id);
  //   return of(result[0]);
  // }
  // zonder observable
  getById(id: Number): User {
    const result = this.Users.filter((item) => item.id === id);
    return result[0];
  }
}
