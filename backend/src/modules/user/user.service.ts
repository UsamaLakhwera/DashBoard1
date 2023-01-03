import { CreateUserDto, UpdateUserDto } from '@lib/dtos';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum, IServerConfig, IUserParams, ServerConfigEnum, UserRoleEnum } from '@lib/types';
import { AuthHelper } from '../auth/auth.helper';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject(ConfigService)
    private config: ConfigService,
    @Inject(AuthHelper)
    private readonly helper: AuthHelper,
  ){}

  create(createAuthDto: CreateUserDto) {
    return 'This action adds a new auth';
  } 

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async createAdmin(){
    const isAdminExit = await this.userRepository.findOneBy({role: UserRoleEnum.ADMIN});
    if(isAdminExit) return;
    const adminDetail: IServerConfig[ServerConfigEnum.ADMIN] = this.config.get<IServerConfig>(ConfigEnum.SERVER).admin;
    const adminUser: IUserParams = {
      ...adminDetail,
      role: UserRoleEnum.ADMIN
    } 

    const admin = new User(adminUser);
    const hashedPassword = await this.helper.encodePassword(
      admin.password
    );
    admin.setPassword(hashedPassword);
    this.userRepository.save(admin);
    return
  }
}
