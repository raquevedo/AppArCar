import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  authenticate
} from '@loopback/authentication';
import {UserProfile, SecurityBindings} from '@loopback/security';
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
import {UsrCarDriver} from '../models';
import {UsrCarDriverRepository} from '../repositories';
import { inject } from '@loopback/core';

@authenticate('admin')
export class CarDriverController {
  constructor(
    @inject(SecurityBindings.USER)
    public currentUserProfile: UserProfile,
    @repository(UsrCarDriverRepository)
    public usrCarDriverRepository : UsrCarDriverRepository,
  ) {}

  @post('/car-drivers/create-user')
  @response(200, {
    description: 'UsrCarDriver model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsrCarDriver)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrCarDriver, {
            title: 'NewUsrCarDriver',
            exclude: ['id','username','email','registerDateDttm','sysCreatedAtDttm','sysUpdatedAtDttm']
            
          }),
        },
      },
    })
    usrCarDriver: UsrCarDriver,
    
  ): Promise<UsrCarDriver> {
    usrCarDriver.id = this.currentUserProfile.id!,
    usrCarDriver.username = this.currentUserProfile.username!,
    usrCarDriver.email = this.currentUserProfile.email!,
    usrCarDriver.registerDateDttm = Date(),
    usrCarDriver.sysCreatedAtDttm = Date(),
    usrCarDriver.sysUpdatedAtDttm = Date()
    return this.usrCarDriverRepository.create(usrCarDriver);
  }
  
  @get('/car-drivers/count')
  @response(200, {
    description: 'UsrCarDriver model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsrCarDriver) where?: Where<UsrCarDriver>,
  ): Promise<Count> {
    return this.usrCarDriverRepository.count(where);
  }

  @get('/car-drivers')
  @response(200, {
    description: 'Array of UsrCarDriver model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsrCarDriver, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsrCarDriver) filter?: Filter<UsrCarDriver>,
  ): Promise<UsrCarDriver[]> {
    return this.usrCarDriverRepository.find(filter);
  }

  @patch('/car-drivers')
  @response(200, {
    description: 'UsrCarDriver PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrCarDriver, {partial: true}),
        },
      },
    })
    usrCarDriver: UsrCarDriver,
    @param.where(UsrCarDriver) where?: Where<UsrCarDriver>,
  ): Promise<Count> {
    return this.usrCarDriverRepository.updateAll(usrCarDriver, where);
  }

  @get('/car-drivers/{id}')
  @response(200, {
    description: 'UsrCarDriver model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsrCarDriver, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UsrCarDriver, {exclude: 'where'}) filter?: FilterExcludingWhere<UsrCarDriver>
  ): Promise<UsrCarDriver> {
    return this.usrCarDriverRepository.findById(id, filter);
  }

  @get('/car-drivers/user-info')
  @response(200, {
    description: 'UsrCarDriver myself model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsrCarDriver, {includeRelations: true}),
      },
    },
  })
  async findMyself(
    @param.filter(UsrCarDriver, {exclude: 'where'}) filter?: FilterExcludingWhere<UsrCarDriver>
  ): Promise<UsrCarDriver> {
    return this.usrCarDriverRepository.findById(this.currentUserProfile.id, filter);
  }

  @patch('/car-drivers/{id}')
  @response(204, {
    description: 'UsrCarDriver PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrCarDriver, {partial: true}),
        },
      },
    })
    usrCarDriver: UsrCarDriver,
  ): Promise<void> {
    await this.usrCarDriverRepository.updateById(id, usrCarDriver);
  }

  @put('/car-drivers/{id}')
  @response(204, {
    description: 'UsrCarDriver PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usrCarDriver: UsrCarDriver,
  ): Promise<void> {
    await this.usrCarDriverRepository.replaceById(id, usrCarDriver);
  }

  @del('/car-drivers/{id}')
  @response(204, {
    description: 'UsrCarDriver DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usrCarDriverRepository.deleteById(id);
  }
}
