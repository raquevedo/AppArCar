import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UsersdbDataSource} from '../datasources';
import {UsrCarDriver, UsrCarDriverRelations} from '../models';

export class UsrCarDriverRepository extends DefaultCrudRepository<
  UsrCarDriver,
  typeof UsrCarDriver.prototype.id,
  UsrCarDriverRelations
> {
  constructor(
    @inject('datasources.usersdb') dataSource: UsersdbDataSource,
  ) {
    super(UsrCarDriver, dataSource);
  }
}
