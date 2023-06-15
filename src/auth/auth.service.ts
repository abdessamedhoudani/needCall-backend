import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email, password) {
    const user = await this.usersService.findOne(email);
    const passwordValid = await bcrypt.compare(password, user.password)
    //Logger.log(user);
    //const hashedpassword = await bcrypt.hash(password, 10);
    //Logger.log(password);
    if (!user || !passwordValid) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.email, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
