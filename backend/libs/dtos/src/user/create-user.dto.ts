import { UserStatus, IUser, UserRoleEnum } from '@lib/types';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsEnum,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: `User name length must be less than 30`,
  })
  userName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: `First Name length must be less than 30`,
  })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: `Last Name length must be less than 30`,
  })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(7, {
    message: `Password must be at least 7 characters long`,
  })
  password: string;

  @IsEnum(UserStatus)
  status?: UserStatus;

  @IsEnum(UserRoleEnum)
  role?: UserRoleEnum;

  constructor(user: IUser) {
    this.userName = user.userName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
    if (user.status) this.status = user.status;
    if (user.role) this.role = user.role;
  }
}
