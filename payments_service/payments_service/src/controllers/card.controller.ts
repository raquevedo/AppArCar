import {
  repository
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {PmtCard} from '../models';
import {PmtCardRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {UserProfile, SecurityBindings} from '@loopback/security';

@authenticate('admin')
export class CardController {
  constructor(
    @inject(SecurityBindings.USER)
    public currentUserProfile: UserProfile,
    @repository(PmtCardRepository)
    public pmtCardRepository : PmtCardRepository,
  ) {}

  @post('/card')
  @response(200, {
    description: 'PmtCard model instance',
    content: {'application/json': {schema: getModelSchemaRef(PmtCard)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PmtCard, {
            title: 'NewPmtCard',
            exclude: ['id',"idCarDriver","sysCreatedAtDttm","sysUpdatedAtDttm"],
          }),
        },
      },
    })
    pmtCard: Omit<PmtCard, 'id'>,
  ): Promise<PmtCard> {
    pmtCard.idCarDriver = this.currentUserProfile.id!
    pmtCard.sysCreatedAtDttm = Date(),
    pmtCard.sysUpdatedAtDttm = Date()
    return this.pmtCardRepository.create(pmtCard);
  }

  @get('/card')
  @response(200, {
    description: 'Array of PmtCard model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array'
        },
      },
    },
  })
  async find(
  ): Promise<PmtCard[]> {
    let filter = {where: {idCarDriver: this.currentUserProfile.id} } 
    return this.pmtCardRepository.find(filter);
  }

  @del('/card/{id}')
  @response(204, {
    description: 'PmtCard DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pmtCardRepository.deleteById(id);
  }
}
