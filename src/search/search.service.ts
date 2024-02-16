import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/card/card.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class SearchService {
   constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}
  async getByName(name: string) {
    const result = await this.cardRepository.findOne({
    where : { name : Like(`%${name}%`)}
    })
    console.log('result :', result);
  }
}
