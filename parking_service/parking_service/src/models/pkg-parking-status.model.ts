import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'pkg_parking_status'}
  }
})
export class PkgParkingStatus extends Entity {
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
    length: 50,
    postgresql: {columnName: 'status', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  status: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'qty_total_slots', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  qtyTotalSlots: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'qty_free_slots', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  qtyFreeSlots: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'qty_busy_slots', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  qtyBusySlots: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'qty_reserved_slots', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  qtyReservedSlots: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'qty_blocked_slots', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  qtyBlockedSlots: number;

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

  constructor(data?: Partial<PkgParkingStatus>) {
    super(data);
  }
}

export interface PkgParkingStatusRelations {
  // describe navigational properties here
}

export type PkgParkingStatusWithRelations = PkgParkingStatus & PkgParkingStatusRelations;
