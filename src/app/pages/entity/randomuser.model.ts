import { UserRoels } from './user.model';
export class RandomUser {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  role: UserRoels = UserRoels.guest;
}
