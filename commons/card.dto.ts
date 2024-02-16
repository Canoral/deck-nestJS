import { IsLowercase, IsNumber, IsNumberString, IsString, Matches } from 'class-validator';

export class Id {
  @IsNumberString()
  id: number;
}

export class Name {
  @IsString()
  @Matches(/^[a-zA-Z]+$/)
  name: string;
}

export class Level {
  @IsNumber()
  level: number;
}


  