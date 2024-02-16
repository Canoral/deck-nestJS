import { Controller, Get } from '@nestjs/common';
import { CardService } from './card.service';
import { promises } from 'dns';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getAllCards() {
    return this.cardService.getAll()
}}
