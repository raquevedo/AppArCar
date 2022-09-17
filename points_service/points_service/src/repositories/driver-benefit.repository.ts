import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresqlDataSource} from '../datasources';
import {DriverBenefit, DriverBenefitRelations} from '../models';

export class DriverBenefitRepository extends DefaultCrudRepository<
  DriverBenefit,
  typeof DriverBenefit.prototype.id,
  DriverBenefitRelations
> {
  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
  ) {
    super(DriverBenefit, dataSource);
  }
}
