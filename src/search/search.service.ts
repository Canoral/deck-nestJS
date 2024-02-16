import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Name } from 'commons/card.dto';
import { Card } from 'src/card/card.entity';
import { Repository, DataSource, Like } from 'typeorm';

@Injectable()
export class SearchService {
   constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    private datasource: DataSource,
  ) {}

  async searchByName(name: Name): Promise<Card[] | null> {
    const cards = await this.cardRepository.manager.query(
      'SELECT * FROM card WHERE LOWER(name) LIKE LOWER($1)',
      [`%${name}%`],
    );
    if (!cards || cards.length === 0) {
      throw new NotFoundException(`Card with name '${name}' not found`);
    }
    return cards;
  }
}
