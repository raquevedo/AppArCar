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
import {Benefit} from '../models';
import {BenefitRepository} from '../repositories';

export class BenefitController {
  constructor(
    @repository(BenefitRepository)
    public benefitRepository : BenefitRepository,
  ) {}

  @post('/benefits')
  @response(200, {
    description: 'Benefit model instance',
    content: {'application/json': {schema: getModelSchemaRef(Benefit)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Benefit, {
            title: 'NewBenefit',
            exclude: ['id'],
          }),
        },
      },
    })
    benefit: Omit<Benefit, 'id'>,
  ): Promise<Benefit> {
    return this.benefitRepository.create(benefit);
  }

  @get('/benefits/count')
  @response(200, {
    description: 'Benefit model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Benefit) where?: Where<Benefit>,
  ): Promise<Count> {
    return this.benefitRepository.count(where);
  }

  @get('/benefits')
  @response(200, {
    description: 'Array of Benefit model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Benefit, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Benefit) filter?: Filter<Benefit>,
  ): Promise<Benefit[]> {
    return this.benefitRepository.find(filter);
  }

  @patch('/benefits')
  @response(200, {
    description: 'Benefit PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Benefit, {partial: true}),
        },
      },
    })
    benefit: Benefit,
    @param.where(Benefit) where?: Where<Benefit>,
  ): Promise<Count> {
    return this.benefitRepository.updateAll(benefit, where);
  }

  @get('/benefits/{id}')
  @response(200, {
    description: 'Benefit model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Benefit, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Benefit, {exclude: 'where'}) filter?: FilterExcludingWhere<Benefit>
  ): Promise<Benefit> {
    return this.benefitRepository.findById(id, filter);
  }

  @patch('/benefits/{id}')
  @response(204, {
    description: 'Benefit PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Benefit, {partial: true}),
        },
      },
    })
    benefit: Benefit,
  ): Promise<void> {
    await this.benefitRepository.updateById(id, benefit);
  }

  @put('/benefits/{id}')
  @response(204, {
    description: 'Benefit PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() benefit: Benefit,
  ): Promise<void> {
    await this.benefitRepository.replaceById(id, benefit);
  }

  @del('/benefits/{id}')
  @response(204, {
    description: 'Benefit DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.benefitRepository.deleteById(id);
  }
}
