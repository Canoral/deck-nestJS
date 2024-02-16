import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/card/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SearchService {
   constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}
  
}
