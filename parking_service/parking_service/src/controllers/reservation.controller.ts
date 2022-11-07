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
  requestBody,
  response,
} from '@loopback/rest';
import {PkgReservation} from '../models';
import {PkgReservationRepository, PkgParkingRepository, PkgParkingStatusRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {UserProfile, SecurityBindings} from '@loopback/security';
import { addHours, diffHours } from '../utils/datetime';
import { calculateTotalPrice } from '../utils/pricing';
import { reserveFreeSlot, reservedToBusySlot, busyToFreeSlot, freeReserveSlot } from '../utils/parkingStatus'
import { publishMessageIntoQueue } from '../utils/queue'

@authenticate('admin')
export class ReservationController {
  constructor(
    @inject(SecurityBindings.USER)
    public currentUserProfile: UserProfile,
    @repository(PkgReservationRepository)
    public pkgReservationRepository : PkgReservationRepository,
    @repository(PkgParkingRepository)
    public pkgParkingRepository : PkgParkingRepository,
    @repository(PkgParkingStatusRepository)
    public pkgParkingStatusRepository: PkgParkingStatusRepository,
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

    pkgReservation.idCarDriver = this.currentUserProfile.id!
    pkgReservation.createdAtDttm = Date()    
    pkgReservation.expirationAtDttm = addHours(pkgReservation.createdAtDttm,1)
    pkgReservation.status = 'created'
    pkgReservation.paymentStatus = 'pending'
    pkgReservation.flgExtended = false 
    pkgReservation.totalPrice = (await this.pkgParkingRepository.findById(pkgReservation.idParking)).priceHour
    pkgReservation.sysCreatedAtDttm = Date()
    pkgReservation.sysUpdatedAtDttm = Date()
    
    await reserveFreeSlot(this.pkgParkingStatusRepository,pkgReservation.idParking)
    let data = await this.pkgReservationRepository.create(pkgReservation)
    publishMessageIntoQueue(Buffer.from(JSON.stringify(data)), 'reservations')

    return data
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

  @get('/reservation/parking/{parkingId}/{status}')
  @response(200, {
    description: 'PkgReservation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PkgReservation, {includeRelations: true}),
      },
    },
  })
  async findByParkingIdStatus(
    @param.path.number('parkingId') parkingId: number,
    @param.path.string('status') status: string,
    filter = {where: {idParking: parkingId, status: status} }
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
            exclude: ['id','idParking','idCarDriver','patentId','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    pkgReservation.cancelledAtDttm = Date()
    pkgReservation.status = 'cancelled'
    pkgReservation.sysUpdatedAtDttm = Date()
    let idParking = await (await this.pkgReservationRepository.findById(id)).idParking

    await freeReserveSlot(this.pkgParkingStatusRepository, idParking)
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
            exclude: ['id','idParking','idCarDriver','patentId','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    pkgReservation = await this.pkgReservationRepository.findById(id)

    if(pkgReservation.status != 'expired'){
      
      let priceHour = (await this.pkgParkingRepository.findById(pkgReservation.idParking)).priceHour
      pkgReservation.status = 'extended'
      pkgReservation.flgExtended = true
      pkgReservation.totalPrice = Number(priceHour) + Number(pkgReservation.totalPrice)
      pkgReservation.sysUpdatedAtDttm = Date()
      pkgReservation.expirationAtDttm = String(addHours(String(pkgReservation.expirationAtDttm),1))

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
            exclude: ['id','idParking','idCarDriver','patentId','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {

    pkgReservation = await this.pkgReservationRepository.findById(id)
    
    if(pkgReservation.status == 'accepted'){
      
      pkgReservation.status = 'parked'
      pkgReservation.checkinAtDttm = Date()
      pkgReservation.sysUpdatedAtDttm = Date()
    } else {
      throw new Error("We can only check-in reservations with status = accepted. Reservation: "+id+" has status: "+pkgReservation.status)
    }
    
    await reservedToBusySlot(this.pkgParkingStatusRepository, pkgReservation.idParking)
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
            exclude: ['id','idParking','idCarDriver','patentId','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    pkgReservation = await this.pkgReservationRepository.findById(id)

    pkgReservation.checkoutAtDttm = Date()
    pkgReservation.sysUpdatedAtDttm = Date()
    pkgReservation.status = 'completed'
    
    let pkg = await this.pkgParkingRepository.findById(pkgReservation.idParking)
    let hours = diffHours(pkgReservation.checkoutAtDttm, String(pkgReservation.expirationAtDttm))
    let total = calculateTotalPrice(hours, Number(pkg.priceHour), Number(pkg.price_6Hours), Number(pkg.price_12Hours), Number(pkg.price_24Hours))
    pkgReservation.totalPrice = total + Number(pkgReservation.totalPrice)

    await busyToFreeSlot(this.pkgParkingStatusRepository, pkgReservation.idParking)
    await this.pkgReservationRepository.updateById(id, pkgReservation);
    publishMessageIntoQueue(Buffer.from(JSON.stringify(pkgReservation)), 'payments')
  }

  @post('/reservation/accept/{id}')
  @response(204, {
    description: 'PkgReservation PATCH success',
  })
  async acceptlById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {partial: true, 
            exclude: ['id','idParking','idCarDriver','patentId','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    pkgReservation = await this.pkgReservationRepository.findById(id)

    if(pkgReservation.status == 'created'){
      
      pkgReservation.status = 'accepted'
      pkgReservation.sysUpdatedAtDttm = Date()
    } else {
      throw new Error("We can only accept reservations with status = created. Reservation: "+id+" has status: "+pkgReservation.status)
    }
    
    await this.pkgReservationRepository.updateById(id, pkgReservation);
    publishMessageIntoQueue(Buffer.from(JSON.stringify(pkgReservation)), 'reservations')
  }

  @post('/reservation/reject/{id}')
  @response(204, {
    description: 'PkgReservation PATCH success',
  })
  async rejectById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgReservation, {partial: true, 
            exclude: ['id','idParking','idCarDriver','patentId','createdAtDttm','expirationAtDttm','cancelledAtDttm','checkinAtDttm','checkoutAtDttm','status','paymentStatus','flgExtended','totalPrice','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pkgReservation: PkgReservation,
  ): Promise<void> {
    pkgReservation = await this.pkgReservationRepository.findById(id)

    if(pkgReservation.status == 'created'){
      pkgReservation.status = 'rejected'
      pkgReservation.sysUpdatedAtDttm = Date()
    } else {
      throw new Error("We can only reject reservations with status = created. Reservation: "+id+" has status: "+pkgReservation.status)
    }
    
    await freeReserveSlot(this.pkgParkingStatusRepository, pkgReservation.idParking)
    await this.pkgReservationRepository.updateById(id, pkgReservation);
    publishMessageIntoQueue(Buffer.from(JSON.stringify(pkgReservation)), 'rejectedReservations')
  }
}
