import { Studio } from '../studio/studio.model';
export enum AgeCatergory {
  Adult = '16+',
  Family = 'All ages',
  Child = 'Children',
}

export class Movie {
  id?: number = 0;
  title: string = '';
  year: number = 2022;
  studio: string = '';
  isInCinema: boolean = false;
  ageCategory: AgeCatergory = AgeCatergory.Family;
}
