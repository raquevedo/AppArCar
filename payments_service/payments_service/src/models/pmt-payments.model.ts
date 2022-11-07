import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'pmt_payments'}}
})
export class PmtPayments extends Entity {
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
    postgresql: {columnName: 'id_reservation', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idReservation: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'id_car_driver', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idCarDriver: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'id_parking', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idParking: number;

  @property({
    type: 'string',
    length: 20,
    postgresql: {columnName: 'card_number', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  cardNumber?: string;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'total', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  total?: number;

  @property({
    type: 'string',
    length: 50,
    postgresql: {columnName: 'status', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  status?: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'paid_at_dttm', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  paidAtDttm: string;

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

  constructor(data?: Partial<PmtPayments>) {
    super(data);
  }
}

export interface PmtPaymentsRelations {
  // describe navigational properties here
}

export type PmtPaymentsWithRelations = PmtPayments & PmtPaymentsRelations;
