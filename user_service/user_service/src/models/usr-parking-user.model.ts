import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'usr_parking_user'}}
})
export class UsrParkingUser extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'username', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  username?: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    postgresql: {columnName: 'name', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
    jsonSchema: {
      minLength: 3,
      maxLength: 100,
    }
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    postgresql: {columnName: 'last_name', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
    jsonSchema: {
      minLength: 3,
      maxLength: 100,
    }
  })
  lastName: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'document_number', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
    jsonSchema: {
      minimum: 1,
    }
  })
  documentNumber: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    postgresql: {columnName: 'email', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'role', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  role: string;

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

  constructor(data?: Partial<UsrParkingUser>) {
    super(data);
  }
}

export interface UsrParkingUserRelations {
  // describe navigational properties here
}

export type UsrParkingUserWithRelations = UsrParkingUser & UsrParkingUserRelations;
