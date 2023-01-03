import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { Repository } from "typeorm";
import { AuthHelper } from "./auth.helper";
import {
  AuthorizeResponseDto,
  LoginRequestDto,
  RegisterRequestDto,
} from "@lib/dtos";

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  public async register(body: RegisterRequestDto): Promise<User | never> {
    const { email, password }: RegisterRequestDto = body;
    let user: User = await this.repository.findOne({ where: { email } });

    if (user) {
      throw new HttpException("User already exit!", HttpStatus.CONFLICT);
    }

    user = new User({
      ...body,
    });
    const hashedPassword = await this.helper.encodePassword(password);
    user.setPassword(hashedPassword);

    return this.repository.save(user);
  }

  public async login(
    body: LoginRequestDto
  ): Promise<AuthorizeResponseDto | never> {
    const { email, password }: LoginRequestDto = body;
    const user: User = await this.repository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException("No user found", HttpStatus.NOT_FOUND);
    }

    const isPasswordValid: boolean = this.helper.isPasswordValid(
      password,
      user.password
    );

    if (!isPasswordValid) {
      throw new HttpException("No user found", HttpStatus.NOT_FOUND);
    }
    delete user.password;
    return new AuthorizeResponseDto(user, this.helper.generateToken(user));
  }
}