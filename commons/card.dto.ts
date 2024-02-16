import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class Id {
  @IsNumberString()
  id: number;
}

export class Level {
  @IsNumber()
  level: number;
}

export class Name {
  @IsString()
  name: string;
}
