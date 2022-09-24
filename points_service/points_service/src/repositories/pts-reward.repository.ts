import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PointsDbDataSource} from '../datasources';
import {PtsReward, PtsRewardRelations} from '../models';

export class PtsRewardRepository extends DefaultCrudRepository<
  PtsReward,
  typeof PtsReward.prototype.id,
  PtsRewardRelations
> {
  constructor(
    @inject('datasources.pointsDb') dataSource: PointsDbDataSource,
  ) {
    super(PtsReward, dataSource);
  }
}
