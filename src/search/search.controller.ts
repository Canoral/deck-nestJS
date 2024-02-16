import { Controller, Get, Query } from '@nestjs/common';
import { CardService } from 'src/card/card.service';
import { SearchService } from './search.service';
import { Name } from 'commons/card.dto';
import { ChildEntity } from 'typeorm';

@Controller('search')
export class SearchController {
  constructor(private readonly cardService: SearchService) {}

@Get()
searchByName(@Query('name') name: Name) {
return this.cardService.searchByName(name)
}
}
