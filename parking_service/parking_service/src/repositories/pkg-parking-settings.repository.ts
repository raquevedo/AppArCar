import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ParkingdbDataSource} from '../datasources';
import {PkgParkingSettings, PkgParkingSettingsRelations} from '../models';

export class PkgParkingSettingsRepository extends DefaultCrudRepository<
  PkgParkingSettings,
  typeof PkgParkingSettings.prototype.idParking,
  PkgParkingSettingsRelations
> {
  constructor(
    @inject('datasources.parkingdb') dataSource: ParkingdbDataSource,
  ) {
    super(PkgParkingSettings, dataSource);
  }
}
