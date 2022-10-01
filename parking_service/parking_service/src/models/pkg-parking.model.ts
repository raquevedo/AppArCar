import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'pkg_parking'}}
})
export class PkgParking extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: 1,
    generated: true,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

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
    postgresql: {columnName: 'geocode', dataType: 'json', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  geocode?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'qty_total_slots', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  qtyTotalSlots: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'office_hours', dataType: 'json', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  officeHours?: string;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'price_hour', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  priceHour?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'price_6_hours', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  price_6Hours?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'price_12_hours', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  price_12Hours?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'price_24_hours', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  price_24Hours?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'price_week', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  priceWeek?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'price_month', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  priceMonth?: number;

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

  constructor(data?: Partial<PkgParking>) {
    super(data);
  }
}

export interface PkgParkingRelations {
  // describe navigational properties here
}

export type PkgParkingWithRelations = PkgParking & PkgParkingRelations;
