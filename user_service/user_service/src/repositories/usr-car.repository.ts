import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UsersdbDataSource} from '../datasources';
import {UsrCar, UsrCarRelations} from '../models';

export class UsrCarRepository extends DefaultCrudRepository<
  UsrCar,
  typeof UsrCar.prototype.id,
  UsrCarRelations
> {
  constructor(
    @inject('datasources.usersdb') dataSource: UsersdbDataSource,
  ) {
    super(UsrCar, dataSource);
  }
}
