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
import {DriverBenefit} from '../models';
import {DriverBenefitRepository} from '../repositories';

export class DriverbenefitController {
  constructor(
    @repository(DriverBenefitRepository)
    public driverBenefitRepository : DriverBenefitRepository,
  ) {}

  @post('/driver-benefits')
  @response(200, {
    description: 'DriverBenefit model instance',
    content: {'application/json': {schema: getModelSchemaRef(DriverBenefit)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DriverBenefit, {
            title: 'NewDriverBenefit',
            exclude: ['id'],
          }),
        },
      },
    })
    driverBenefit: Omit<DriverBenefit, 'id'>,
  ): Promise<DriverBenefit> {
    return this.driverBenefitRepository.create(driverBenefit);
  }

  @get('/driver-benefits/count')
  @response(200, {
    description: 'DriverBenefit model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DriverBenefit) where?: Where<DriverBenefit>,
  ): Promise<Count> {
    return this.driverBenefitRepository.count(where);
  }

  @get('/driver-benefits')
  @response(200, {
    description: 'Array of DriverBenefit model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DriverBenefit, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DriverBenefit) filter?: Filter<DriverBenefit>,
  ): Promise<DriverBenefit[]> {
    return this.driverBenefitRepository.find(filter);
  }

  @patch('/driver-benefits')
  @response(200, {
    description: 'DriverBenefit PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DriverBenefit, {partial: true}),
        },
      },
    })
    driverBenefit: DriverBenefit,
    @param.where(DriverBenefit) where?: Where<DriverBenefit>,
  ): Promise<Count> {
    return this.driverBenefitRepository.updateAll(driverBenefit, where);
  }

  @get('/driver-benefits/{id}')
  @response(200, {
    description: 'DriverBenefit model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DriverBenefit, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DriverBenefit, {exclude: 'where'}) filter?: FilterExcludingWhere<DriverBenefit>
  ): Promise<DriverBenefit> {
    return this.driverBenefitRepository.findById(id, filter);
  }

  @patch('/driver-benefits/{id}')
  @response(204, {
    description: 'DriverBenefit PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DriverBenefit, {partial: true}),
        },
      },
    })
    driverBenefit: DriverBenefit,
  ): Promise<void> {
    await this.driverBenefitRepository.updateById(id, driverBenefit);
  }

  @put('/driver-benefits/{id}')
  @response(204, {
    description: 'DriverBenefit PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() driverBenefit: DriverBenefit,
  ): Promise<void> {
    await this.driverBenefitRepository.replaceById(id, driverBenefit);
  }

  @del('/driver-benefits/{id}')
  @response(204, {
    description: 'DriverBenefit DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.driverBenefitRepository.deleteById(id);
  }
}
