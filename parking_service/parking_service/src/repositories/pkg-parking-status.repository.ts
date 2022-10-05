import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ParkingdbDataSource} from '../datasources';
import {PkgParkingStatus, PkgParkingStatusRelations} from '../models';

export class PkgParkingStatusRepository extends DefaultCrudRepository<
  PkgParkingStatus,
  typeof PkgParkingStatus.prototype.idParking,
  PkgParkingStatusRelations
> {
  constructor(
    @inject('datasources.parkingdb') dataSource: ParkingdbDataSource,
  ) {
    super(PkgParkingStatus, dataSource);
  }
}
