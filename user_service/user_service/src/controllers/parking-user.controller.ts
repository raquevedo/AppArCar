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
import { inject } from '@loopback/core';
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
import {UsrParkingUser} from '../models';
import {UsrParkingUserRepository} from '../repositories';

@authenticate('admin')
export class ParkingUserController {
  constructor(
    @inject(SecurityBindings.USER)
    public currentUserProfile: UserProfile,
    @repository(UsrParkingUserRepository)
    public usrParkingUserRepository : UsrParkingUserRepository,
  ) {}

  @post('/parking-user/create')
  @response(200, {
    description: 'UsrParkingUser model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsrParkingUser)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrParkingUser, {
            title: 'NewUsrParkingUser',
            exclude: ['id','username','email','role','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    usrParkingUser: UsrParkingUser
  ): Promise<UsrParkingUser> {
    usrParkingUser.id = this.currentUserProfile.id!,
    usrParkingUser.username = this.currentUserProfile.username!,
    usrParkingUser.email = this.currentUserProfile.email!,
    usrParkingUser.role = 'admin',
    usrParkingUser.sysCreatedAtDttm = Date(),
    usrParkingUser.sysUpdatedAtDttm = Date()
    return this.usrParkingUserRepository.create(usrParkingUser);
  }

  @get('/parking-user/user-info')
  @response(200, {
    description: 'UsrParkingUser myself model instance',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            data: {type: 'object'},
            isRegister: {type: 'boolean'}
          }
        },
      },
    },
  })
  async findMyself(
  ){
    let data
    let isRegister
    try{
      data = await this.usrParkingUserRepository.findById(this.currentUserProfile.id)
      isRegister = true
    }catch(Error){
      data = {}
      isRegister = false
    };
    
    return {'data':data,'isRegister':isRegister}
  }
  
  @patch('/car-drivers/update-profile')
  @response(204, {
    description: 'UsrCarDriver PATCH success',
  })
  async updateById(

   @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsrParkingUser, 
            {exclude: ['id','username','email','role','sysCreatedAtDttm','sysUpdatedAtDttm'],
            partial: true}),
        },
      },
    })
    usrParkingUser: UsrParkingUser,
  ): Promise<void> {
    usrParkingUser.sysUpdatedAtDttm  = Date();
    await this.usrParkingUserRepository.updateById(this.currentUserProfile.id, usrParkingUser);
  }
}