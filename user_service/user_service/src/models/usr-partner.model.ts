import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'usr_partner'}}
})
export class UsrPartner extends Entity {
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
    postgresql: {columnName: 'business_name', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  businessName: string;

  @property({
    type: 'string',
    required: true,
    length: 25,
    postgresql: {columnName: 'cuit_number', dataType: 'character varying', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  cuitNumber: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    postgresql: {columnName: 'street_name', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  streetName: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'street_number', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  streetNumber: number;

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
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'latitude', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  latitude?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'longitude', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  longitude?: number;

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

  constructor(data?: Partial<UsrPartner>) {
    super(data);
  }
}

export interface UsrPartnerRelations {
  // describe navigational properties here
}

export type UsrPartnerWithRelations = UsrPartner & UsrPartnerRelations;
