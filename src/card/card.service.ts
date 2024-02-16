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

  async getAll(): Promise<Card[]> {
  const result = await this.cardRepository.find();
  if(!result) {
    throw new NotFoundException('Il y a eu une erreur')
  }
  return result
  }

  async getOne(id: number): Promise<Card | undefined> {
    const result = await this.cardRepository.findOne({
      where: {id: id}
    })
    if(!result) {
      throw new NotFoundException("La carte n'a pas été trouvée")
    }
    return result
  }

}
