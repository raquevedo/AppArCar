import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresqlDataSource} from '../datasources';
import {Benefit, BenefitRelations} from '../models';

export class BenefitRepository extends DefaultCrudRepository<
  Benefit,
  typeof Benefit.prototype.id,
  BenefitRelations
> {
  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
  ) {
    super(Benefit, dataSource);
  }
}
