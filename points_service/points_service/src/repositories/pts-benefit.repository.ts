import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PointsDbDataSource} from '../datasources';
import {PtsBenefit, PtsBenefitRelations} from '../models';

export class PtsBenefitRepository extends DefaultCrudRepository<
  PtsBenefit,
  typeof PtsBenefit.prototype.id,
  PtsBenefitRelations
> {
  constructor(
    @inject('datasources.pointsDb') dataSource: PointsDbDataSource,
  ) {
    super(PtsBenefit, dataSource);
  }
}
