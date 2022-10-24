import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PaymentsdbDataSource} from '../datasources';
import {PmtCard, PmtCardRelations} from '../models';

export class PmtCardRepository extends DefaultCrudRepository<
  PmtCard,
  typeof PmtCard.prototype.id,
  PmtCardRelations
> {
  constructor(
    @inject('datasources.paymentsdb') dataSource: PaymentsdbDataSource,
  ) {
    super(PmtCard, dataSource);
  }
}
