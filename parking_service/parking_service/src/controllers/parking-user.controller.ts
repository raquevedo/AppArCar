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
import {PkgParkingUsers} from '../models';
import {PkgParkingUsersRepository} from '../repositories';

export class ParkingUserController {
  constructor(
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
