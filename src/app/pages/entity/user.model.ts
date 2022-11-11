export enum UserRoels {
  adim = 'admin',
  editor = 'editor',
  guest = 'guest',
}

export enum UserGender {
  male = 'male',
  female = 'female',
  neutral = 'neutral',
}

export class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  emailAdres: string = '';
  gender: UserGender = UserGender.male;
  role: UserRoels = UserRoels.adim;

  constructor(firtName = '', lastName = '', emailAdres = '') {
    this.firstName = firtName;
    this.lastName = lastName;
    this.emailAdres = emailAdres;
  }
}
