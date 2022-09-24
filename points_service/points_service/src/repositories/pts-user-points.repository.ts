import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PointsDbDataSource} from '../datasources';
import {PtsUserPoints, PtsUserPointsRelations} from '../models';

export class PtsUserPointsRepository extends DefaultCrudRepository<
  PtsUserPoints,
  typeof PtsUserPoints.prototype.carDriverId,
  PtsUserPointsRelations
> {
  constructor(
    @inject('datasources.pointsDb') dataSource: PointsDbDataSource,
  ) {
    super(PtsUserPoints, dataSource);
  }
}
