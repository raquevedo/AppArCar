import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'pkg_parking_users'}}
})
export class PkgParkingUsers extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: 1,
    generated: true,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'id_parking', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  idParking?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'id_parking_user', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  idParkingUser?: number;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'user_role', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  userRole?: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'sys_created_at_dttm', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  sysCreatedAtDttm: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'sys_updated_at_dttm', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  sysUpdatedAtDttm: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PkgParkingUsers>) {
    super(data);
  }
}

export interface PkgParkingUsersRelations {
  // describe navigational properties here
}

export type PkgParkingUsersWithRelations = PkgParkingUsers & PkgParkingUsersRelations;
