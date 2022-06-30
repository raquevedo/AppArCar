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
import {Tarjeta} from '../models';
import {TarjetaRepository} from '../repositories';

export class TarjetaController {
  constructor(
    @repository(TarjetaRepository)
    public tarjetaRepository : TarjetaRepository,
  ) {}

  @post('/tarjeta')
  @response(200, {
    description: 'Tarjeta model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tarjeta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tarjeta, {
            title: 'NewTarjeta',
            
          }),
        },
      },
    })
    tarjeta: Tarjeta,
  ): Promise<Tarjeta> {
    return this.tarjetaRepository.create(tarjeta);
  }

  @get('/tarjeta/count')
  @response(200, {
    description: 'Tarjeta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tarjeta) where?: Where<Tarjeta>,
  ): Promise<Count> {
    return this.tarjetaRepository.count(where);
  }

  @get('/tarjeta')
  @response(200, {
    description: 'Array of Tarjeta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tarjeta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tarjeta) filter?: Filter<Tarjeta>,
  ): Promise<Tarjeta[]> {
    return this.tarjetaRepository.find(filter);
  }

  @patch('/tarjeta')
  @response(200, {
    description: 'Tarjeta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tarjeta, {partial: true}),
        },
      },
    })
    tarjeta: Tarjeta,
    @param.where(Tarjeta) where?: Where<Tarjeta>,
  ): Promise<Count> {
    return this.tarjetaRepository.updateAll(tarjeta, where);
  }

  @get('/tarjeta/{id}')
  @response(200, {
    description: 'Tarjeta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tarjeta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tarjeta, {exclude: 'where'}) filter?: FilterExcludingWhere<Tarjeta>
  ): Promise<Tarjeta> {
    return this.tarjetaRepository.findById(id, filter);
  }

  @patch('/tarjeta/{id}')
  @response(204, {
    description: 'Tarjeta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tarjeta, {partial: true}),
        },
      },
    })
    tarjeta: Tarjeta,
  ): Promise<void> {
    await this.tarjetaRepository.updateById(id, tarjeta);
  }

  @put('/tarjeta/{id}')
  @response(204, {
    description: 'Tarjeta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tarjeta: Tarjeta,
  ): Promise<void> {
    await this.tarjetaRepository.replaceById(id, tarjeta);
  }

  @del('/tarjeta/{id}')
  @response(204, {
    description: 'Tarjeta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tarjetaRepository.deleteById(id);
  }
}
