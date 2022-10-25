import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PaymentsdbDataSource} from '../datasources';
import {PmtPayments, PmtPaymentsRelations} from '../models';

export class PmtPaymentsRepository extends DefaultCrudRepository<
  PmtPayments,
  typeof PmtPayments.prototype.id,
  PmtPaymentsRelations
> {
  constructor(
    @inject('datasources.paymentsdb') dataSource: PaymentsdbDataSource,
  ) {
    super(PmtPayments, dataSource);
  }
}
