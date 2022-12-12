import { IsEmail, IsString, Length } from 'class-validator';

export class LoginDto {
  
  @IsString({ message: "email satr bo'lishi kerak" })
  @IsEmail({}, { message: "Noto'g'ri email kiritildi" })
  readonly email: string;

  @IsString({ message: "Parol satr bo'lishi kerak" })
  @Length(4, 200, { message: "Parol kamida 4ta belgidan uzun bo'lishi kerak" })
  readonly password: string;
}
