import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UsersdbDataSource} from '../datasources';
import {UsrPartner, UsrPartnerRelations} from '../models';

export class UsrPartnerRepository extends DefaultCrudRepository<
  UsrPartner,
  typeof UsrPartner.prototype.id,
  UsrPartnerRelations
> {
  constructor(
    @inject('datasources.usersdb') dataSource: UsersdbDataSource,
  ) {
    super(UsrPartner, dataSource);
  }
}
