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
import {PkgParking, PkgParkingUsers} from '../models';
import {PkgParkingRepository, PkgParkingUsersRepository} from '../repositories';

export class ParkingController {
  constructor(
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
    console.log("Tengo que crear en parking-users id del creador y el id del parking-->",currentParking.id); 

    let pkgParkingUsers = await new PkgParkingUsers()
    pkgParkingUsers.idParking = currentParking.id
    pkgParkingUsers.idParkingUser = 666
    pkgParkingUsers.userRole = 'owner'
    pkgParkingUsers.sysCreatedAtDttm = Date()
    pkgParkingUsers.sysUpdatedAtDttm = Date()
    this.pkgParkingUsersRepository.create(pkgParkingUsers);

    //TODO Cargar el status de cochera ParkingStatus

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
    //@param.filter(PkgParking) filter?: Filter<PkgParking>,
    //filter = {where: {idCarDriver: this.currentUserProfile.id}, fields: ['id','idCarDriver','patentId','brand','model','color','productionYear']}
    filter = {where: {idCarDriver: 666}, fields: ['idParking'], include: [{relation: 'PkgParkingRelations'}]}
  ): Promise<PkgParking[]> {
    let parkings = await this.pkgParkingUsersRepository.find(filter);
    console.log("litado de parkings asociados al user 666",parkings)

    let parksIds = []
    await parkings.forEach(element => parksIds.push(element.idParking) );  
    
    let filter_parking = {where: {id: 8}};
    let list : PkgParking[]
    let rpar = this.pkgParkingRepository.findById(3)
    
    return this.pkgParkingRepository.find(filter_parking);
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
