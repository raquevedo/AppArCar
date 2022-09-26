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
import {PkgParkingStatus} from '../models';
import {PkgParkingStatusRepository} from '../repositories';

export class ParkingStatusController {
  constructor(
    @repository(PkgParkingStatusRepository)
    public pkgParkingStatusRepository : PkgParkingStatusRepository,
  ) {}

  @post('/parking-status')
  @response(200, {
    description: 'PkgParkingStatus model instance',
    content: {'application/json': {schema: getModelSchemaRef(PkgParkingStatus)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParkingStatus, {
            title: 'NewPkgParkingStatus',
            exclude: ['id_parking'],
          }),
        },
      },
    })
    pkgParkingStatus: Omit<PkgParkingStatus, 'id_parking'>,
  ): Promise<PkgParkingStatus> {
    return this.pkgParkingStatusRepository.create(pkgParkingStatus);
  }

  @get('/parking-status/count')
  @response(200, {
    description: 'PkgParkingStatus model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PkgParkingStatus) where?: Where<PkgParkingStatus>,
  ): Promise<Count> {
    return this.pkgParkingStatusRepository.count(where);
  }

  @get('/parking-status')
  @response(200, {
    description: 'Array of PkgParkingStatus model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PkgParkingStatus, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PkgParkingStatus) filter?: Filter<PkgParkingStatus>,
  ): Promise<PkgParkingStatus[]> {
    return this.pkgParkingStatusRepository.find(filter);
  }

  @patch('/parking-status')
  @response(200, {
    description: 'PkgParkingStatus PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParkingStatus, {partial: true}),
        },
      },
    })
    pkgParkingStatus: PkgParkingStatus,
    @param.where(PkgParkingStatus) where?: Where<PkgParkingStatus>,
  ): Promise<Count> {
    return this.pkgParkingStatusRepository.updateAll(pkgParkingStatus, where);
  }

  @get('/parking-status/{id}')
  @response(200, {
    description: 'PkgParkingStatus model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PkgParkingStatus, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PkgParkingStatus, {exclude: 'where'}) filter?: FilterExcludingWhere<PkgParkingStatus>
  ): Promise<PkgParkingStatus> {
    return this.pkgParkingStatusRepository.findById(id, filter);
  }

  @patch('/parking-status/{id}')
  @response(204, {
    description: 'PkgParkingStatus PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParkingStatus, {partial: true}),
        },
      },
    })
    pkgParkingStatus: PkgParkingStatus,
  ): Promise<void> {
    await this.pkgParkingStatusRepository.updateById(id, pkgParkingStatus);
  }

  @put('/parking-status/{id}')
  @response(204, {
    description: 'PkgParkingStatus PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pkgParkingStatus: PkgParkingStatus,
  ): Promise<void> {
    await this.pkgParkingStatusRepository.replaceById(id, pkgParkingStatus);
  }

  @del('/parking-status/{id}')
  @response(204, {
    description: 'PkgParkingStatus DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pkgParkingStatusRepository.deleteById(id);
  }
}
