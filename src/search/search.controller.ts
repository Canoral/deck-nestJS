import { Controller } from '@nestjs/common';
import { CardService } from 'src/card/card.service';

@Controller('search')
export class SearchController {
  constructor(private readonly cardService: CardService) {}

@Get()


}
