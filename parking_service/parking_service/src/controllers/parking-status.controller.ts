import {
  Count,
  CountSchema,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
  patch,
  requestBody,
  response,
} from '@loopback/rest';
import {PkgParkingStatus} from '../models';
import {PkgParkingStatusRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {UserProfile, SecurityBindings} from '@loopback/security';

@authenticate('admin')
export class ParkingStatusController {
  constructor(
    @inject(SecurityBindings.USER)
    public currentUserProfile: UserProfile,
    @repository(PkgParkingStatusRepository)
    public pkgParkingStatusRepository : PkgParkingStatusRepository,
  ) {}

  @get('/parking-status/{id}')
  @response(200, {
    description: 'PkgParkingStatus model instance'
  })
  async findById(
    @param.path.number('id') id: number
  ): Promise<PkgParkingStatus> {
    return this.pkgParkingStatusRepository.findById(id);
  }

  @patch('/parking-status/block-slot/{id}')
  @response(204, {
    description: 'PkgParkingStatus PATCH success',
  })
  async blockFreeSlot(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParkingStatus, {partial: true
          ,exclude: ['idParking','status','qtyTotalSlots','qtyFreeSlots','qtyBusySlots','qtyReservedSlots','sysCreatedAtDttm','sysUpdatedAtDttm']
        }),
        },
      },
    })
    pkgParkingStatus: PkgParkingStatus,
  ): Promise<void> {
    let currentStatus = await this.pkgParkingStatusRepository.findById(id);
    if (currentStatus.qtyFreeSlots > pkgParkingStatus.qtyBlockedSlots ){
      currentStatus.qtyBlockedSlots += pkgParkingStatus.qtyBlockedSlots
      currentStatus.qtyFreeSlots -= pkgParkingStatus.qtyBlockedSlots
    } else {
      throw new Error("qtyBlockedSlot is grather than qtyFreeSlots")
    }
    await this.pkgParkingStatusRepository.updateById(id, currentStatus);
  }

  @patch('/parking-status/use-free-slot/{id}')
  @response(204, {
    description: 'PkgParkingStatus PATCH success',
  })
  async useFreeSlot(
    @param.path.number('id') id: number
  ): Promise<void> {
    let currentStatus = await this.pkgParkingStatusRepository.findById(id);
    if (currentStatus.qtyFreeSlots >= 1 ){
      currentStatus.qtyFreeSlots -= 1
      currentStatus.qtyBusySlots += 1
    } else {
      throw new Error("Parking is full, qtyFreeSlots = 0 ")
    }
    await this.pkgParkingStatusRepository.updateById(id, currentStatus);
  }

  @patch('/parking-status/free-busy-slot/{id}')
  @response(204, {
    description: 'PkgParkingStatus PATCH success',
  })
  async freeBusySlot(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParkingStatus, {partial: true
          ,exclude: ['idParking','status','qtyTotalSlots','qtyBlockedSlots','qtyBusySlots','qtyReservedSlots','sysCreatedAtDttm','sysUpdatedAtDttm']
        }),
        },
      },
    })
    pkgParkingStatus: PkgParkingStatus,
  ): Promise<void> {
    let currentStatus = await this.pkgParkingStatusRepository.findById(id);
    if (currentStatus.qtyBusySlots >= pkgParkingStatus.qtyFreeSlots ){
      currentStatus.qtyFreeSlots += pkgParkingStatus.qtyFreeSlots
      currentStatus.qtyBusySlots -= pkgParkingStatus.qtyFreeSlots
    } else {
      throw new Error("qtyFreeSlots is grather than qtyBusySlots or qtyBusySlots is 0")
    }
    await this.pkgParkingStatusRepository.updateById(id, currentStatus);
  }

  @patch('/parking-status/free-blocked-slot/{id}')
  @response(204, {
    description: 'PkgParkingStatus PATCH success',
  })
  async freeBlockedSlot(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParkingStatus, {partial: true
          ,exclude: ['idParking','status','qtyTotalSlots','qtyBlockedSlots','qtyBusySlots','qtyReservedSlots','sysCreatedAtDttm','sysUpdatedAtDttm']
        }),
        },
      },
    })
    pkgParkingStatus: PkgParkingStatus,
  ): Promise<void> {
    let currentStatus = await this.pkgParkingStatusRepository.findById(id);
    if (currentStatus.qtyBlockedSlots >= pkgParkingStatus.qtyFreeSlots ){
      currentStatus.qtyFreeSlots += pkgParkingStatus.qtyFreeSlots
      currentStatus.qtyBlockedSlots -= pkgParkingStatus.qtyFreeSlots
    } else {
      throw new Error("qtyFreeSlots is grather than qtyBlockedSlots or qtyBlockedSlots is 0")
    }
    await this.pkgParkingStatusRepository.updateById(id, currentStatus);
  }

}