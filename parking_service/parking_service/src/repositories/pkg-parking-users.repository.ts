import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ParkingdbDataSource} from '../datasources';
import {PkgParkingUsers, PkgParkingUsersRelations} from '../models';

export class PkgParkingUsersRepository extends DefaultCrudRepository<
  PkgParkingUsers,
  typeof PkgParkingUsers.prototype.id,
  PkgParkingUsersRelations
> {
  constructor(
    @inject('datasources.parkingdb') dataSource: ParkingdbDataSource,
  ) {
    super(PkgParkingUsers, dataSource);
  }
}
