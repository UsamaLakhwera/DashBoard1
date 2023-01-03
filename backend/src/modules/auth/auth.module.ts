import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { User } from '../user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum, IJwtConfig } from '@lib/types';
import { AuthHelper } from './auth.helper';
import { JwtStrategy } from 'src/strategies';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({defaultStrategy: "jwt", property: "user"}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<IJwtConfig>(ConfigEnum.JWT_TOKEN).secret,
        signOptions: {
          expiresIn: config.get<IJwtConfig>(ConfigEnum.JWT_TOKEN).expireIn
        }
      })
    })
  ], 
  controllers: [AuthController],
  providers: [AuthHelper, JwtStrategy, AuthService],
  exports: [AuthService, AuthHelper]
})
export class AuthModule {}
