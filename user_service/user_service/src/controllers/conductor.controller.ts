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
import {Conductor} from '../models';
import {ConductorRepository} from '../repositories';

export class ConductorController {
  constructor(
    @repository(ConductorRepository)
    public conductorRepository : ConductorRepository,
  ) {}

  @post('/conductor')
  @response(200, {
    description: 'Conductor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Conductor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conductor, {
            title: 'NewConductor',
            
          }),
        },
      },
    })
    conductor: Conductor,
  ): Promise<Conductor> {
    return this.conductorRepository.create(conductor);
  }

  @get('/conductor/count')
  @response(200, {
    description: 'Conductor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Conductor) where?: Where<Conductor>,
  ): Promise<Count> {
    return this.conductorRepository.count(where);
  }

  @get('/conductor')
  @response(200, {
    description: 'Array of Conductor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Conductor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Conductor) filter?: Filter<Conductor>,
  ): Promise<Conductor[]> {
    return this.conductorRepository.find(filter);
  }

  @patch('/conductor')
  @response(200, {
    description: 'Conductor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conductor, {partial: true}),
        },
      },
    })
    conductor: Conductor,
    @param.where(Conductor) where?: Where<Conductor>,
  ): Promise<Count> {
    return this.conductorRepository.updateAll(conductor, where);
  }

  @get('/conductor/{id}')
  @response(200, {
    description: 'Conductor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Conductor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Conductor, {exclude: 'where'}) filter?: FilterExcludingWhere<Conductor>
  ): Promise<Conductor> {
    return this.conductorRepository.findById(id, filter);
  }

  @patch('/conductor/{id}')
  @response(204, {
    description: 'Conductor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conductor, {partial: true}),
        },
      },
    })
    conductor: Conductor,
  ): Promise<void> {
    await this.conductorRepository.updateById(id, conductor);
  }

  @put('/conductor/{id}')
  @response(204, {
    description: 'Conductor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() conductor: Conductor,
  ): Promise<void> {
    await this.conductorRepository.replaceById(id, conductor);
  }

  @del('/conductor/{id}')
  @response(204, {
    description: 'Conductor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.conductorRepository.deleteById(id);
  }
}
