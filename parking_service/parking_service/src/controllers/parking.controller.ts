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
import {PkgParking, PkgParkingUsers, PkgParkingStatus, PkgParkingRelations} from '../models';
import {PkgParkingRepository, PkgParkingUsersRepository, PkgParkingStatusRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {UserProfile, SecurityBindings} from '@loopback/security';
import { coordinatesDistance, getCoordinates } from '../utils/geolocation';

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
            exclude: ['id','latitude','longitude','sysUpdatedAtDttm','sysCreatedAtDttm'],
          }),
        },
      },
    })
    pkgParking: PkgParking,
  ) {
       
    let address = pkgParking.streetName + ' ' + pkgParking.streetNumber
    let response = await getCoordinates(address)
    if(response['statusCode'] == 500){
      pkgParking.latitude = 0
      pkgParking.longitude = 0  
    }else{
      pkgParking.latitude = response['latitude']
      pkgParking.longitude = response['longitude']  
    }
    
    
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
    pkgParkingStatus.qtyTotalSlots = currentParking.qtyTotalSlots
    pkgParkingStatus.qtyFreeSlots = currentParking.qtyTotalSlots
    pkgParkingStatus.qtyBusySlots = 0
    pkgParkingStatus.qtyReservedSlots = 0
    pkgParkingStatus.qtyBlockedSlots =  0
    pkgParkingStatus.sysCreatedAtDttm = Date()
    pkgParkingStatus.sysUpdatedAtDttm = Date()
    let currentStatus = await this.pkgParkingStatusRepository.create(pkgParkingStatus);

    return {'parkingInfo':currentParking, 'status':currentStatus}
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
          schema: getModelSchemaRef(PkgParking, {partial: true, exclude: ['id','latitude','longitude','sysUpdatedAtDttm','sysCreatedAtDttm']}),
        },
      },
    })
    pkgParking: PkgParking,
  ): Promise<void> {
    let address = pkgParking.streetName + ' ' + pkgParking.streetNumber
    let response = await getCoordinates(address)
    if(response['statusCode'] == 500){
      pkgParking.latitude = 0
      pkgParking.longitude = 0  
    }else{
      pkgParking.latitude = response['latitude']
      pkgParking.longitude = response['longitude']  
    }
    await this.pkgParkingRepository.updateById(id, pkgParking);
  }



  @del('/parking/{id}')
  @response(204, {
    description: 'PkgParking DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pkgParkingRepository.deleteById(id);
  }

  @get('/parking/nearest/latitude={latitude}/longitude={longitude}/kilometers={kilometers}')
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
  async findNearestParking(
    @param.path.number('latitude') latitude: number,
    @param.path.number('longitude') longitude: number,
    @param.path.number('kilometers') kilometers: number,
  ) {

    let parkings = await this.pkgParkingRepository.find()
    let nearest: (PkgParking & PkgParkingRelations)[] = []

    parkings.forEach(async item => {
        let dist = await coordinatesDistance(latitude,longitude,Number(item.latitude),Number(item.longitude),'K')
        if (dist < kilometers) {
          nearest.push(item)
        }
    });
    return nearest
  }

   
  }

