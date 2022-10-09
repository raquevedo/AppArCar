import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ParkingdbDataSource} from '../datasources';
import {PkgParking, PkgParkingRelations} from '../models';

export class PkgParkingRepository extends DefaultCrudRepository<
  PkgParking,
  typeof PkgParking.prototype.id,
  PkgParkingRelations
> {
  constructor(
    @inject('datasources.parkingdb') dataSource: ParkingdbDataSource,
  ) {
    super(PkgParking, dataSource);
  }
}
