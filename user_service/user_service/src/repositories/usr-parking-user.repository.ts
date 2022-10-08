import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UsersdbDataSource} from '../datasources';
import {UsrParkingUser, UsrParkingUserRelations} from '../models';

export class UsrParkingUserRepository extends DefaultCrudRepository<
  UsrParkingUser,
  typeof UsrParkingUser.prototype.id,
  UsrParkingUserRelations
> {
  constructor(
    @inject('datasources.usersdb') dataSource: UsersdbDataSource,
  ) {
    super(UsrParkingUser, dataSource);
  }
}
