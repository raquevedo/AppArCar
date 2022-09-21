import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PointsDataSource} from '../datasources';
import {Rewards, RewardsRelations} from '../models';

export class RewardsRepository extends DefaultCrudRepository<
  Rewards,
  typeof Rewards.prototype.id,
  RewardsRelations
> {
  constructor(
    @inject('datasources.points') dataSource: PointsDataSource,
  ) {
    super(Rewards, dataSource);
  }
}
