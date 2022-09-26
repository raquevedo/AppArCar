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
import {PkgReservation} from '../models';
import {PkgReservationRepository} from '../repositories';

export class ReservationController {
  constructor(
    @repository(PkgReservationRepository)
    public pkgReservationRepository : PkgReservationRepository,
  ) {}

  @post('/reservation')
  @response(200, {
    description: 'PkgReservation model instance',
    content: {'application/json': {schema: getModelSchemaRef(PkgReservation)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {
            title: 'NewPkgReservation',
            exclude: ['id'],
          }),
        },
      },
    })
    pkgReservation: Omit<PkgReservation, 'id'>,
  ): Promise<PkgReservation> {
    return this.pkgReservationRepository.create(pkgReservation);
  }

  @get('/reservation/count')
  @response(200, {
    description: 'PkgReservation model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PkgReservation) where?: Where<PkgReservation>,
  ): Promise<Count> {
    return this.pkgReservationRepository.count(where);
  }

  @get('/reservation')
  @response(200, {
    description: 'Array of PkgReservation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PkgReservation, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PkgReservation) filter?: Filter<PkgReservation>,
  ): Promise<PkgReservation[]> {
    return this.pkgReservationRepository.find(filter);
  }

  @patch('/reservation')
  @response(200, {
    description: 'PkgReservation PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {partial: true}),
        },
      },
    })
    pkgReservation: PkgReservation,
    @param.where(PkgReservation) where?: Where<PkgReservation>,
  ): Promise<Count> {
    return this.pkgReservationRepository.updateAll(pkgReservation, where);
  }

  @get('/reservation/{id}')
  @response(200, {
    description: 'PkgReservation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PkgReservation, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PkgReservation, {exclude: 'where'}) filter?: FilterExcludingWhere<PkgReservation>
  ): Promise<PkgReservation> {
    return this.pkgReservationRepository.findById(id, filter);
  }

  @patch('/reservation/{id}')
  @response(204, {
    description: 'PkgReservation PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {partial: true}),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    await this.pkgReservationRepository.updateById(id, pkgReservation);
  }

  @put('/reservation/{id}')
  @response(204, {
    description: 'PkgReservation PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pkgReservation: PkgReservation,
  ): Promise<void> {
    await this.pkgReservationRepository.replaceById(id, pkgReservation);
  }

  @del('/reservation/{id}')
  @response(204, {
    description: 'PkgReservation DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pkgReservationRepository.deleteById(id);
  }
}
