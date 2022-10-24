import {
  repository
} from '@loopback/repository';
import {
  post,
  get,
  getModelSchemaRef,
  requestBody,
  response,
} from '@loopback/rest';
import {PmtPayments} from '../models';
import {PmtPaymentsRepository} from '../repositories';
import { publishMessageIntoQueue } from '../utils/queue'
import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {UserProfile, SecurityBindings} from '@loopback/security';

@authenticate('admin')
export class PaymentsController {
  constructor(
    @inject(SecurityBindings.USER)
    public currentUserProfile: UserProfile,
    @repository(PmtPaymentsRepository)
    public pmtPaymentsRepository : PmtPaymentsRepository,
  ) {}

  @post('/payments')
  @response(200, {
    description: 'PmtPayments model instance',
    content: {'application/json': {schema: getModelSchemaRef(PmtPayments)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PmtPayments, {
            title: 'NewPmtPayments',
            exclude: ['id','status','idCarDriver','paidAtDttm','sysCreatedAtDttm','sysUpdatedAtDttm'],
          }),
        },
      },
    })
    pmtPayments: Omit<PmtPayments, 'id'>,
  ): Promise<PmtPayments> {
    pmtPayments.status = 'paid'
    pmtPayments.idCarDriver = this.currentUserProfile.id!
    pmtPayments.paidAtDttm = Date()
    pmtPayments.sysCreatedAtDttm = Date()
    pmtPayments.sysUpdatedAtDttm = Date()
    //TODO Call function to update status = paid into "reservations table"
    publishMessageIntoQueue(Buffer.from(JSON.stringify(pmtPayments)), 'paidReservations')
    return this.pmtPaymentsRepository.create(pmtPayments);
  }

  @get('/payments')
  @response(200, {
    description: 'Array of PmtPayments model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array'
        },
      },
    },
  })
  async findByCarDriver(
  ): Promise<PmtPayments[]> {
    let filter = {where: {idCarDriver: this.currentUserProfile.id!} } 
    return this.pmtPaymentsRepository.find(filter);
  }

}
