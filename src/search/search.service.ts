import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Name, Element, Level, Value } from 'commons/card.dto';
import { Card } from 'src/card/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async searchByName(name: Name['name']): Promise<Card[] | null> {
    const cards = await this.cardRepository.manager.query(
      'SELECT * FROM card WHERE LOWER(name) LIKE LOWER($1)',
      [`%${name}%`],
    );
    if (!cards || cards.length === 0) {
      throw new NotFoundException(`Card with name '${name}' not found`);
    }
    return cards;
  }

  async searchByElement(element: Element['element']): Promise<Card[] | null> {
    const cards = await this.cardRepository.manager.query(
      'SELECT * FROM card WHERE element = LOWER($1)',
      [element],
    );
    if (!cards || cards.length === 0) {
      throw new NotFoundException(
        `La carte avec l'élement : '${element}' n'a pas été trouvée`,
      );
    }
    return cards;
  }

  async searchByLevel(level: Level['level']): Promise<Card[] | null> {
    const cards = await this.cardRepository.find({
      where: { level: level },
    });

    if (!cards || cards.length === 0) {
      throw new NotFoundException(
        `La carte avec le niveau ${level} n'a pas été trouvée`,
      );
    }

    return cards;
  }

  async searchByValue(value: Value['value'], direction: Value['direction']) {
    const cards = await this.cardRepository.manager.query(
      `SELECT * FROM card WHERE value_${direction} = $1`,
      [value],
    );

    if (!cards || cards.length === 0) {
      throw new NotFoundException(
        `La carte de valeur : ${value} vers la direction : value_${direction} n'a pas été trouvée`,
      );
    }

    return cards;
  }
}
