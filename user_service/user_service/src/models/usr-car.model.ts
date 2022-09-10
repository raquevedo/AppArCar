import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'usr_car'}}
})
export class UsrCar extends Entity {
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
    required: true,
    scale: 0,
    postgresql: {columnName: 'id_car_driver', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idCarDriver: number;

  @property({
    type: 'string',
    required: true,
    length: 10,
    postgresql: {columnName: 'patent_id', dataType: 'character varying', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  patentId: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'brand', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'model', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  model: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'color', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  color: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'production_year', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  productionYear: number;

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

  constructor(data?: Partial<UsrCar>) {
    super(data);
  }
}

export interface UsrCarRelations {
  // describe navigational properties here
}

export type UsrCarWithRelations = UsrCar & UsrCarRelations;
