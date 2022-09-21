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
import {
  authenticate
} from '@loopback/authentication';
import {UserProfile, SecurityBindings} from '@loopback/security';
import { inject } from '@loopback/core';

@authenticate('admin')
export class CarController {
  constructor(
    @inject(SecurityBindings.USER)
    public currentUserProfile: UserProfile,
    @repository(UsrCarRepository)
    public usrCarRepository : UsrCarRepository,
  ) {}

  @post('/cars/create')
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
            exclude: ['id','idCarDriver','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    usrCar: Omit<UsrCar, 'id'>,
  ): Promise<UsrCar> {
    usrCar.idCarDriver = this.currentUserProfile.id!,
    usrCar.sysCreatedAtDttm = Date(),
    usrCar.sysUpdatedAtDttm = Date()
    return this.usrCarRepository.create(usrCar);
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
    filter = {where: {idCarDriver: this.currentUserProfile.id}, fields: ['id','idCarDriver','patentId','brand','model','color','productionYear']}
  ): Promise<UsrCar[]> {
    return this.usrCarRepository.find(filter);
  }

  @patch('/cars/update-car/{id}')
  @response(204, {
    description: 'UsrCar PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrCar, {exclude: ['id','idCarDriver','sysCreatedAtDttm','sysUpdatedAtDttm'],partial: true}),
        },
      },
    })
    usrCar: UsrCar,
  ): Promise<void> {
    usrCar.sysUpdatedAtDttm = Date(),
    await this.usrCarRepository.updateById(id, usrCar);
  }

  @del('/cars/remove/{id}')
  @response(204, {
    description: 'UsrCar DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usrCarRepository.deleteById(id);
  }
}
