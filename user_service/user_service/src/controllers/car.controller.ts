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
import {UsrCar} from '../models';
import {UsrCarRepository} from '../repositories';

export class CarController {
  constructor(
    @repository(UsrCarRepository)
    public usrCarRepository : UsrCarRepository,
  ) {}

  @post('/cars')
  @response(200, {
    description: 'UsrCar model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsrCar)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrCar, {
            title: 'NewUsrCar',
            exclude: ['id'],
          }),
        },
      },
    })
    usrCar: Omit<UsrCar, 'id'>,
  ): Promise<UsrCar> {
    return this.usrCarRepository.create(usrCar);
  }

  @get('/cars/count')
  @response(200, {
    description: 'UsrCar model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsrCar) where?: Where<UsrCar>,
  ): Promise<Count> {
    return this.usrCarRepository.count(where);
  }

  @get('/cars')
  @response(200, {
    description: 'Array of UsrCar model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsrCar, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsrCar) filter?: Filter<UsrCar>,
  ): Promise<UsrCar[]> {
    return this.usrCarRepository.find(filter);
  }

  @patch('/cars')
  @response(200, {
    description: 'UsrCar PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrCar, {partial: true}),
        },
      },
    })
    usrCar: UsrCar,
    @param.where(UsrCar) where?: Where<UsrCar>,
  ): Promise<Count> {
    return this.usrCarRepository.updateAll(usrCar, where);
  }

  @get('/cars/{id}')
  @response(200, {
    description: 'UsrCar model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsrCar, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UsrCar, {exclude: 'where'}) filter?: FilterExcludingWhere<UsrCar>
  ): Promise<UsrCar> {
    return this.usrCarRepository.findById(id, filter);
  }

  @patch('/cars/{id}')
  @response(204, {
    description: 'UsrCar PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrCar, {partial: true}),
        },
      },
    })
    usrCar: UsrCar,
  ): Promise<void> {
    await this.usrCarRepository.updateById(id, usrCar);
  }

  @put('/cars/{id}')
  @response(204, {
    description: 'UsrCar PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usrCar: UsrCar,
  ): Promise<void> {
    await this.usrCarRepository.replaceById(id, usrCar);
  }

  @del('/cars/{id}')
  @response(204, {
    description: 'UsrCar DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usrCarRepository.deleteById(id);
  }
}
