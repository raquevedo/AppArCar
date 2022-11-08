import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'pmt_card'}}
})
export class PmtCard extends Entity {
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
    postgresql: {columnName: 'id_car_driver', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idCarDriver: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    postgresql: {columnName: 'card_number', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  cardNumber: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'card_name', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  cardName: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    postgresql: {columnName: 'company', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  company: string;
  
  @property({
    type: 'string',
    required: true,
    length: 50,
    postgresql: {columnName: 'type', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  type: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'expire_date', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  expireDate: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'sys_created_at_dttm', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  sysCreatedAtDttm: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'sys_updated_at_dttm', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  sysUpdatedAtDttm: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PmtCard>) {
    super(data);
  }
}

export interface PmtCardRelations {
  // describe navigational properties here
}

export type PmtCardWithRelations = PmtCard & PmtCardRelations;
