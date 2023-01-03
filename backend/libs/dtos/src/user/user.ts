import { UserStatus, IUser, UserRoleEnum } from '@lib/types';
import { Uuid } from '@lib/utils';

export class UserDto {
  id: Uuid;

  userName: string;

  firstName: string;

  lastName: string;

  email: string;

  status?: UserStatus;
  role?: UserRoleEnum;

  createdAt?: Date;
  updatedAt?: Date;

  constructor(user: IUser) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    if (user.status) this.status = user.status;
    if (user.role) this.role = user.role;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
