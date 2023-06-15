import { Body, Controller, Get, Post, HttpCode, HttpStatus, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUserDto } from "./dto/signIn-user.dto";
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto:SignInUserDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
/*
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  */
}