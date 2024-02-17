import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class Id {
  @IsNumberString({}, { message: "L'id doit être un nombre." })
  id: number;
}

export class Name {
  @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
  name: string;
}

export class Element {
  @IsString({ message: "L'élément doit être une chaîne de caractères." })
  element: string;
}

export class Level {
  @IsNumber({}, { message: 'Le niveau doit être un nombre.' })
  level: number;
}
