import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CoordinatesController } from './coordinates.controller';
import { PositionStackService } from './coordinates.service';

@Module({
  imports: [HttpModule],
  providers: [PositionStackService],
  controllers: [CoordinatesController],
})
export class CoordinatesModule {}
