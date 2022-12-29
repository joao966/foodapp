import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateLoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;
}
