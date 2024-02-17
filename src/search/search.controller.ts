import {
  Controller,
  Get,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { SearchService } from './search.service';
import { Name, Element, Level, Value } from 'commons/card.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly cardService: SearchService) {}

  @Get('name')
  searchByName(@Query('name') name: Name['name']) {
    return this.cardService.searchByName(name);
  }

  @Get('element')
  searchByElement(@Query('element') element: Element['element']) {
    return this.cardService.searchByElement(element);
  }

  @Get('level')
  searchByLevel(@Query('level', ParseIntPipe) level: Level['level']) {
    return this.cardService.searchByLevel(level);
  }

  @Get('value')
  searchByValue(@Query('direction') direction, @Query('value') value) {
    return this.cardService.searchByValue(value, direction);
  }
}
