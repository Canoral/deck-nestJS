import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'src/card/card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
