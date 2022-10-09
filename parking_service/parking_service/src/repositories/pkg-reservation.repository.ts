import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ParkingdbDataSource} from '../datasources';
import {PkgReservation, PkgReservationRelations} from '../models';

export class PkgReservationRepository extends DefaultCrudRepository<
  PkgReservation,
  typeof PkgReservation.prototype.idParking,
  PkgReservationRelations
> {
  constructor(
    @inject('datasources.parkingdb') dataSource: ParkingdbDataSource,
  ) {
    super(PkgReservation, dataSource);
  }
}
