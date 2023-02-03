import { IsEmail, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(4)
  @MaxLength(12)
  password: string;
}
