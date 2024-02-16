import { Controller, Get, Query } from '@nestjs/common';
import { CardService } from 'src/card/card.service';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly cardService: SearchService) {}

@Get()
getCardByName(@Query('name') name:string) {
return this.cardService.getByName(name)
}

}
