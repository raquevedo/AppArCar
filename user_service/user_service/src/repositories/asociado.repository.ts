import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UsersdbDataSource} from '../datasources';
import {Asociado, AsociadoRelations} from '../models';

export class AsociadoRepository extends DefaultCrudRepository<
  Asociado,
  typeof Asociado.prototype.id,
  AsociadoRelations
> {
  constructor(
    @inject('datasources.usersdb') dataSource: UsersdbDataSource,
  ) {
    super(Asociado, dataSource);
  }
}
