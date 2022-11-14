import { UserRoels } from './user.model';
export interface RandomUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoels;
}
