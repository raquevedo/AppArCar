import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PointsDataSource} from '../datasources';
import {Benefit, BenefitRelations} from '../models';

export class BenefitRepository extends DefaultCrudRepository<
  Benefit,
  typeof Benefit.prototype.id,
  BenefitRelations
> {
  constructor(
    @inject('datasources.points') dataSource: PointsDataSource,
  ) {
    super(Benefit, dataSource);
  }
}
