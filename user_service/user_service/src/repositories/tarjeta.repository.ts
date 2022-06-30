import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UsersdbDataSource} from '../datasources';
import {Tarjeta, TarjetaRelations} from '../models';

export class TarjetaRepository extends DefaultCrudRepository<
  Tarjeta,
  typeof Tarjeta.prototype.id,
  TarjetaRelations
> {
  constructor(
    @inject('datasources.usersdb') dataSource: UsersdbDataSource,
  ) {
    super(Tarjeta, dataSource);
  }
}
