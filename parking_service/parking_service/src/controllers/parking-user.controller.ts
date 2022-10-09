import {
  repository
} from '@loopback/repository';
import {
  post,
  getModelSchemaRef,
  requestBody,
  response
} from '@loopback/rest';
import {PkgParkingUsers} from '../models';
import {PkgParkingUsersRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {UserProfile, SecurityBindings} from '@loopback/security';

@authenticate('admin')
export class ParkingUserController {
  constructor(
    @inject(SecurityBindings.USER)
    public currentUserProfile: UserProfile,
    @repository(PkgParkingUsersRepository)
    public pkgParkingUsersRepository : PkgParkingUsersRepository,
  ) {}

  @post('/parking-users/create')
  @response(200, {
    description: 'PkgParkingUsers model instance',
    content: {'application/json': {schema: getModelSchemaRef(PkgParkingUsers)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParkingUsers, {
            title: 'NewPkgParkingUsers',
            exclude: ['id','sysCreatedAtDttm','sysUpdatedAtDttm']
            
          }),
        },
      },
    })
    pkgParkingUsers: PkgParkingUsers,
  ): Promise<PkgParkingUsers> {
    pkgParkingUsers.sysCreatedAtDttm = Date(), 
    pkgParkingUsers.sysUpdatedAtDttm = Date()
    return this.pkgParkingUsersRepository.create(pkgParkingUsers);
  }

  
}
