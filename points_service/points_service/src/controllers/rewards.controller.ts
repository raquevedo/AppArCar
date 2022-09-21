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
import {Rewards} from '../models';
import {RewardsRepository} from '../repositories';

export class RewardsController {
  constructor(
    @repository(RewardsRepository)
    public rewardsRepository : RewardsRepository,
  ) {}

  @post('/rewards')
  @response(200, {
    description: 'Rewards model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rewards)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rewards, {
            title: 'NewRewards',
            exclude: ['id'],
          }),
        },
      },
    })
    rewards: Omit<Rewards, 'id'>,
  ): Promise<Rewards> {
    return this.rewardsRepository.create(rewards);
  }

  @get('/rewards/count')
  @response(200, {
    description: 'Rewards model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Rewards) where?: Where<Rewards>,
  ): Promise<Count> {
    return this.rewardsRepository.count(where);
  }

  @get('/rewards')
  @response(200, {
    description: 'Array of Rewards model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rewards, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rewards) filter?: Filter<Rewards>,
  ): Promise<Rewards[]> {
    return this.rewardsRepository.find(filter);
  }

  @patch('/rewards')
  @response(200, {
    description: 'Rewards PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rewards, {partial: true}),
        },
      },
    })
    rewards: Rewards,
    @param.where(Rewards) where?: Where<Rewards>,
  ): Promise<Count> {
    return this.rewardsRepository.updateAll(rewards, where);
  }

  @get('/rewards/{id}')
  @response(200, {
    description: 'Rewards model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rewards, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Rewards, {exclude: 'where'}) filter?: FilterExcludingWhere<Rewards>
  ): Promise<Rewards> {
    return this.rewardsRepository.findById(id, filter);
  }

  @patch('/rewards/{id}')
  @response(204, {
    description: 'Rewards PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rewards, {partial: true}),
        },
      },
    })
    rewards: Rewards,
  ): Promise<void> {
    await this.rewardsRepository.updateById(id, rewards);
  }

  @put('/rewards/{id}')
  @response(204, {
    description: 'Rewards PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rewards: Rewards,
  ): Promise<void> {
    await this.rewardsRepository.replaceById(id, rewards);
  }

  @del('/rewards/{id}')
  @response(204, {
    description: 'Rewards DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rewardsRepository.deleteById(id);
  }
}
