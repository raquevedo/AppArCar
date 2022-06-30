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
import {Asociado} from '../models';
import {AsociadoRepository} from '../repositories';

export class AsociadoController {
  constructor(
    @repository(AsociadoRepository)
    public asociadoRepository : AsociadoRepository,
  ) {}

  @post('/asociados')
  @response(200, {
    description: 'Asociado model instance',
    content: {'application/json': {schema: getModelSchemaRef(Asociado)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asociado, {
            title: 'NewAsociado',
            
          }),
        },
      },
    })
    asociado: Asociado,
  ): Promise<Asociado> {
    return this.asociadoRepository.create(asociado);
  }

  @get('/asociados/count')
  @response(200, {
    description: 'Asociado model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Asociado) where?: Where<Asociado>,
  ): Promise<Count> {
    return this.asociadoRepository.count(where);
  }

  @get('/asociados')
  @response(200, {
    description: 'Array of Asociado model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Asociado, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Asociado) filter?: Filter<Asociado>,
  ): Promise<Asociado[]> {
    return this.asociadoRepository.find(filter);
  }

  @patch('/asociados')
  @response(200, {
    description: 'Asociado PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asociado, {partial: true}),
        },
      },
    })
    asociado: Asociado,
    @param.where(Asociado) where?: Where<Asociado>,
  ): Promise<Count> {
    return this.asociadoRepository.updateAll(asociado, where);
  }

  @get('/asociados/{id}')
  @response(200, {
    description: 'Asociado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Asociado, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Asociado, {exclude: 'where'}) filter?: FilterExcludingWhere<Asociado>
  ): Promise<Asociado> {
    return this.asociadoRepository.findById(id, filter);
  }

  @patch('/asociados/{id}')
  @response(204, {
    description: 'Asociado PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asociado, {partial: true}),
        },
      },
    })
    asociado: Asociado,
  ): Promise<void> {
    await this.asociadoRepository.updateById(id, asociado);
  }

  @put('/asociados/{id}')
  @response(204, {
    description: 'Asociado PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() asociado: Asociado,
  ): Promise<void> {
    await this.asociadoRepository.replaceById(id, asociado);
  }

  @del('/asociados/{id}')
  @response(204, {
    description: 'Asociado DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.asociadoRepository.deleteById(id);
  }
}
