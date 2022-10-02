import {
  FilterExcludingWhere,
  repository
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
import {PkgParking, PkgParkingUsers, PkgParkingStatus} from '../models';
import {PkgParkingRepository, PkgParkingUsersRepository, PkgParkingStatusRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {UserProfile, SecurityBindings} from '@loopback/security';

@authenticate('admin')
export class ParkingController {
  constructor(
    @inject(SecurityBindings.USER)
    public currentUserProfile: UserProfile,
    @repository(PkgParkingStatusRepository)
    public pkgParkingStatusRepository : PkgParkingStatusRepository,
    @repository(PkgParkingRepository)
    public pkgParkingRepository : PkgParkingRepository,
    @repository(PkgParkingUsersRepository)
    public pkgParkingUsersRepository : PkgParkingUsersRepository,
  ) {}

  @post('/parking/create')
  @response(200, {
    description: 'PkgParking model instance',
    content: {'application/json': {schema: getModelSchemaRef(PkgParking)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParking, {
            title: 'NewPkgParking',
            exclude: ['id','geocode','sysUpdatedAtDttm','sysCreatedAtDttm'],
          }),
        },
      },
    })
    pkgParking: PkgParking,
  ): Promise<PkgParking> {
    
    //TODO: Replace by geolocalization interface
    pkgParking.geocode = JSON.stringify({'latitude':0,'longitude':0})!,
    pkgParking.sysCreatedAtDttm = Date(),
    pkgParking.sysUpdatedAtDttm = Date()

    let currentParking = await this.pkgParkingRepository.create(pkgParking) 

    //Create relation between parking and user 
    let pkgParkingUsers = await new PkgParkingUsers()
    pkgParkingUsers.idParking = currentParking.id
    pkgParkingUsers.idParkingUser = this.currentUserProfile.id!
    pkgParkingUsers.userRole = 'owner'
    pkgParkingUsers.sysCreatedAtDttm = Date()
    pkgParkingUsers.sysUpdatedAtDttm = Date()
    this.pkgParkingUsersRepository.create(pkgParkingUsers);

    //Create initial status for Parking
    let pkgParkingStatus = await new PkgParkingStatus()
    pkgParkingStatus.idParking = currentParking.id
    pkgParkingStatus.status = 'active'
    pkgParkingStatus.officeHours = currentParking.officeHours
    pkgParkingStatus.qtyTotalSlots = currentParking.qtyTotalSlots
    pkgParkingStatus.qtyFreeSlots = currentParking.qtyTotalSlots
    pkgParkingStatus.qtyBussySlots = 0
    pkgParkingStatus.qtyReservedSlots = 0
    pkgParkingStatus.qtyBlockedSlots =  0
    pkgParkingStatus.sysCreatedAtDttm = Date()
    pkgParkingStatus.sysUpdatedAtDttm = Date()
    this.pkgParkingStatusRepository.create(pkgParkingStatus);

    return currentParking
  }



  @get('/parking')
  @response(200, {
    description: 'Array of PkgParking model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PkgParking, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    //REPLACE 666 by TOKEN ID 
    filter = {where: {idParkingUser: this.currentUserProfile.id!}, fields: ['idParking'] }
  ) {
    let parkings = await this.pkgParkingUsersRepository.find(filter);
    let parksIds: any[] = [];
    let data : any[] = [];

    await parkings.forEach(element => parksIds.push(element.idParking) );  

    for (const id of parksIds) {  
      try {
      let parkingInfo   = await this.pkgParkingRepository.findById(Number(id));
      let parkingStatus = await this.pkgParkingStatusRepository.findById(Number(id));
      data.push({'parkingInfo':parkingInfo, 'status':parkingStatus})
      } catch (error) {
        console.error("Parkingid",id," was deleted by user.");
      }
    }
    
    return data
  }


  
  @get('/parking/{id}')
  @response(200, {
    description: 'PkgParking model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PkgParking, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PkgParking, {exclude: 'where'}) filter?: FilterExcludingWhere<PkgParking>
  ): Promise<PkgParking> {
    return this.pkgParkingRepository.findById(id, filter);
  }

  @patch('/parking/update/{id}')
  @response(204, {
    description: 'PkgParking PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParking, {partial: true, exclude: ['id','geocode','sysUpdatedAtDttm','sysCreatedAtDttm']}),
        },
      },
    })
    pkgParking: PkgParking,
  ): Promise<void> {
    //TODO: Recalcular coordenadas 
    await this.pkgParkingRepository.updateById(id, pkgParking);
  }



  @del('/parking/{id}')
  @response(204, {
    description: 'PkgParking DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pkgParkingRepository.deleteById(id);
  }
}
