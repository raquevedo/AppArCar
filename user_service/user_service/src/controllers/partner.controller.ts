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
import {UsrPartner} from '../models';
import {UsrPartnerRepository} from '../repositories';

export class PartnerController {
  constructor(
    @repository(UsrPartnerRepository)
    public usrPartnerRepository : UsrPartnerRepository,
  ) {}

  @post('/partners')
  @response(200, {
    description: 'UsrPartner model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsrPartner)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrPartner, {
            title: 'NewUsrPartner',
            
          }),
        },
      },
    })
    usrPartner: UsrPartner,
  ): Promise<UsrPartner> {
    return this.usrPartnerRepository.create(usrPartner);
  }

  @get('/partners/count')
  @response(200, {
    description: 'UsrPartner model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsrPartner) where?: Where<UsrPartner>,
  ): Promise<Count> {
    return this.usrPartnerRepository.count(where);
  }

  @get('/partners')
  @response(200, {
    description: 'Array of UsrPartner model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsrPartner, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsrPartner) filter?: Filter<UsrPartner>,
  ): Promise<UsrPartner[]> {
    return this.usrPartnerRepository.find(filter);
  }

  @patch('/partners')
  @response(200, {
    description: 'UsrPartner PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrPartner, {partial: true}),
        },
      },
    })
    usrPartner: UsrPartner,
    @param.where(UsrPartner) where?: Where<UsrPartner>,
  ): Promise<Count> {
    return this.usrPartnerRepository.updateAll(usrPartner, where);
  }

  @get('/partners/{id}')
  @response(200, {
    description: 'UsrPartner model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsrPartner, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UsrPartner, {exclude: 'where'}) filter?: FilterExcludingWhere<UsrPartner>
  ): Promise<UsrPartner> {
    return this.usrPartnerRepository.findById(id, filter);
  }

  @patch('/partners/{id}')
  @response(204, {
    description: 'UsrPartner PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrPartner, {partial: true}),
        },
      },
    })
    usrPartner: UsrPartner,
  ): Promise<void> {
    await this.usrPartnerRepository.updateById(id, usrPartner);
  }

  @put('/partners/{id}')
  @response(204, {
    description: 'UsrPartner PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usrPartner: UsrPartner,
  ): Promise<void> {
    await this.usrPartnerRepository.replaceById(id, usrPartner);
  }

  @del('/partners/{id}')
  @response(204, {
    description: 'UsrPartner DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usrPartnerRepository.deleteById(id);
  }
}
