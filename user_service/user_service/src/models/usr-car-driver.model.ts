import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'usr_car_driver'}}
})
export class UsrCarDriver extends Entity {
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
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    postgresql: {columnName: 'last_name', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  lastName: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'document_number', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  documentNumber: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'birth_date_dt', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  birthDateDt: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'gender', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  gender: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    postgresql: {columnName: 'email', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  email: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'contact_number', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  contactNumber: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'register_date_dttm', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  registerDateDttm: string;

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

  constructor(data?: Partial<UsrCarDriver>) {
    super(data);
  }
}

export interface UsrCarDriverRelations {
  // describe navigational properties here
}

export type UsrCarDriverWithRelations = UsrCarDriver & UsrCarDriverRelations;
