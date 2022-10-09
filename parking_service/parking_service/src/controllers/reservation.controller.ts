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
  requestBody,
  response,
} from '@loopback/rest';
import {PkgReservation} from '../models';
import {PkgReservationRepository} from '../repositories';

export class ReservationController {
  constructor(
    @repository(PkgReservationRepository)
    public pkgReservationRepository : PkgReservationRepository,
  ) {}

  @post('/reservation/create')
  @response(200, {
    description: 'PkgReservation model instance',
    content: {'application/json': {schema: getModelSchemaRef(PkgReservation)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {
            title: 'NewPkgReservation',
            exclude: ['id','idCarDriver','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: Omit<PkgReservation, 'id'>,
  ): Promise<PkgReservation> {

    let dt = new Date();
    
    pkgReservation.idCarDriver = 666 //Replace by token id 
    pkgReservation.createdAtDttm = Date()
    pkgReservation.expirationAtDttm = dt.setHours( dt.getHours() + 1 );
    pkgReservation.status = 'created'
    pkgReservation.paymentStatus = 'pending'
    pkgReservation.flgExtended = false 
    pkgReservation.totalPrice = 200
    pkgReservation.sysCreatedAtDttm = Date()
    pkgReservation.sysUpdatedAtDttm = Date()
    

    return this.pkgReservationRepository.create(pkgReservation);
  }

  @get('/reservation/')
  @response(200, {
    description: 'Array of PkgReservation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PkgReservation, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PkgReservation) filter?: Filter<PkgReservation>,
  ): Promise<PkgReservation[]> {
    return this.pkgReservationRepository.find(filter);
  }


  @get('/reservation/{id}')
  @response(200, {
    description: 'PkgReservation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PkgReservation, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PkgReservation, {exclude: 'where'}) filter?: FilterExcludingWhere<PkgReservation>
  ): Promise<PkgReservation> {
    return this.pkgReservationRepository.findById(id, filter);
  }

  @get('/reservation/parking/{parkingId}')
  @response(200, {
    description: 'PkgReservation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PkgReservation, {includeRelations: true}),
      },
    },
  })
  async findByParkingId(
    @param.path.number('parkingId') parkingId: number,
    filter = {where: {idParking: parkingId} }
  ): Promise<PkgReservation[]> {
    return this.pkgReservationRepository.find(filter);
  }

  @get('/reservation/car-driver/{idCarDriver}')
  @response(200, {
    description: 'PkgReservation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PkgReservation, {includeRelations: true}),
      },
    },
  })
  async findByCarDriverId(
    @param.path.number('idCarDriver') idCarDriver: number,
    filter = {where: {idCarDriver: idCarDriver} }
  ): Promise<PkgReservation[]> {
    return this.pkgReservationRepository.find(filter);
  }
  
  @patch('/reservation/{id}')
  @response(204, {
    description: 'PkgReservation PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {partial: true}),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    await this.pkgReservationRepository.updateById(id, pkgReservation);
  }

  @post('/reservation/cancel/{id}')
  @response(204, {
    description: 'PkgReservation PATCH success',
  })
  async cancelById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {partial: true, 
            exclude: ['id','idParking','idCarDriver','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    pkgReservation.cancelledAtDttm = Date()
    pkgReservation.status = 'cancelled'
    pkgReservation.sysUpdatedAtDttm = Date()
    await this.pkgReservationRepository.updateById(id, pkgReservation);
  }

  @post('/reservation/extend/{id}')
  @response(204, {
    description: 'PkgReservation PATCH success',
  })
  async extendlById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {partial: true, 
            exclude: ['id','idParking','idCarDriver','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    pkgReservation = await this.pkgReservationRepository.findById(id)

    if(pkgReservation.status != 'expired'){
      
      pkgReservation.status = 'extended'
      pkgReservation.flgExtended = true
      pkgReservation.totalPrice = 200 + Number(pkgReservation.totalPrice)
      pkgReservation.sysUpdatedAtDttm = Date()
      //TODO ADD 1 HOUR TO expirationAtDttm 
    }
    
    await this.pkgReservationRepository.updateById(id, pkgReservation);
  }
  
  @post('/reservation/checkin/{id}')
  @response(204, {
    description: 'PkgReservation PATCH success',
  })
  async checkInById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {partial: true, 
            exclude: ['id','idParking','idCarDriver','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    pkgReservation.checkinAtDttm = Date()
    pkgReservation.status = 'parked'
    pkgReservation.sysUpdatedAtDttm = Date()
    await this.pkgReservationRepository.updateById(id, pkgReservation);
  }

  @post('/reservation/checkout/{id}')
  @response(204, {
    description: 'PkgReservation PATCH success',
  })
  async checkOutById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {partial: true, 
            exclude: ['id','idParking','idCarDriver','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    pkgReservation.checkoutAtDttm = Date()
    pkgReservation.sysUpdatedAtDttm = Date()
    pkgReservation.status = 'completed'
    await this.pkgReservationRepository.updateById(id, pkgReservation);
  }

}
