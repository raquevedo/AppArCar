import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'pkg_reservation'}}
})
export class PkgReservation extends Entity {
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
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id_parking', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idParking: number;
  
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'patent_id', dataType: 'character varying', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  patentId: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'created_at_dttm', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  createdAtDttm: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'expiration_at_dttm', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  expirationAtDttm?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'cancelled_at_dttm', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  cancelledAtDttm?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'checkin_at_dttm', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  checkinAtDttm?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'checkout_at_dttm', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  checkoutAtDttm?: string;

  @property({
    type: 'string',
    length: 25,
    postgresql: {columnName: 'status', dataType: 'character varying', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  status?: string;

  @property({
    type: 'string',
    length: 25,
    postgresql: {columnName: 'payment_status', dataType: 'character varying', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  paymentStatus?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'flg_extended', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  flgExtended?: boolean;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'total_price', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  totalPrice?: number;

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

  constructor(data?: Partial<PkgReservation>) {
    super(data);
  }
}

export interface PkgReservationRelations {
  // describe navigational properties here
}

export type PkgReservationWithRelations = PkgReservation & PkgReservationRelations;
