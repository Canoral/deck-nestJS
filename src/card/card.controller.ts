import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CardService } from './card.service';
import { promises } from 'dns';
import { Card } from './card.entity';
import { Id } from 'commons/card.dto';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getAllCards(): Promise<Card[]> {
    return this.cardService.getAll()
  }

  @Get("card/:id")
  getOneCard(@Param("id") params: Id): Promise<Card | undefined> {
    return this.cardService.getOne(params.id)
  }
}
