import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {PkgParking} from '../models';
import {PkgParkingRepository} from '../repositories';

export class ParkingController {
  constructor(
    @repository(PkgParkingRepository)
    public pkgParkingRepository : PkgParkingRepository,
  ) {}

  @post('/parking')
  @response(200, {
    description: 'PkgParking model instance',
    content: {'application/json': {schema: getModelSchemaRef(PkgParking)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParking, {
            title: 'NewPkgParking',
            exclude: ['id'],
          }),
        },
      },
    })
    pkgParking: Omit<PkgParking, 'id'>,
  ): Promise<PkgParking> {
    return this.pkgParkingRepository.create(pkgParking);
  }

  @get('/parking/count')
  @response(200, {
    description: 'PkgParking model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PkgParking) where?: Where<PkgParking>,
  ): Promise<Count> {
    return this.pkgParkingRepository.count(where);
  }

  @get('/parking')
  @response(200, {
    description: 'Array of PkgParking model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PkgParking, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PkgParking) filter?: Filter<PkgParking>,
  ): Promise<PkgParking[]> {
    return this.pkgParkingRepository.find(filter);
  }

  @patch('/parking')
  @response(200, {
    description: 'PkgParking PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParking, {partial: true}),
        },
      },
    })
    pkgParking: PkgParking,
    @param.where(PkgParking) where?: Where<PkgParking>,
  ): Promise<Count> {
    return this.pkgParkingRepository.updateAll(pkgParking, where);
  }

  @get('/parking/{id}')
  @response(200, {
    description: 'PkgParking model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PkgParking, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PkgParking, {exclude: 'where'}) filter?: FilterExcludingWhere<PkgParking>
  ): Promise<PkgParking> {
    return this.pkgParkingRepository.findById(id, filter);
  }

  @patch('/parking/{id}')
  @response(204, {
    description: 'PkgParking PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParking, {partial: true}),
        },
      },
    })
    pkgParking: PkgParking,
  ): Promise<void> {
    await this.pkgParkingRepository.updateById(id, pkgParking);
  }

  @put('/parking/{id}')
  @response(204, {
    description: 'PkgParking PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pkgParking: PkgParking,
  ): Promise<void> {
    await this.pkgParkingRepository.replaceById(id, pkgParking);
  }

  @del('/parking/{id}')
  @response(204, {
    description: 'PkgParking DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pkgParkingRepository.deleteById(id);
  }
}
