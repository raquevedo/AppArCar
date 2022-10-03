import { Controller, Get, Param } from '@nestjs/common';
import { PositionStackService } from './coordinates.service';
import { ApiTags } from '@nestjs/swagger';
import { CoordinatesInterface } from './coordinates.interface';

@ApiTags('coordinates')
@Controller('coordinates')
export class CoordinatesController {
  constructor(private coordinatesService: PositionStackService) {}

  @Get(':address')
  async getCoordinates(@Param('address') params:string): Promise<CoordinatesInterface> {
    return await this.coordinatesService.getCoordinates(params);
  }
}
