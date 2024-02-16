import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './card.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async getAll() {
  const result = await this.cardRepository.find();
  if(!result) {
    throw new NotFoundException('Il y a eu une erreur')
  }
  return result
  }

}
