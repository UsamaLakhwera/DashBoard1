import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.userService.create(createAuthDto);
  // }

  @Post('register')
  findAll() {
    console.log('checking I am hbere');
    // return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.authService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.userService.update(+id, updateAuthDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.authService.remove(+id);
  }
}
