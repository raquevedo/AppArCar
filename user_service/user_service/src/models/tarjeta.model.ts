import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'users', table: 'tarjeta'}}})
export class Tarjeta extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'NRO_TARJETA', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nroTarjeta: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ID_CONDUCTOR', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idConductor: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'BANCO_EMISOR', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  bancoEmisor: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'TIPO_TARJETA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tipoTarjeta: string;

  @property({
    type: 'string',
    required: true,
    length: 4,
    mysql: {columnName: 'FECHA_VENCIMIENTO', dataType: 'varchar', dataLength: 4, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  fechaVencimiento: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'SYS_CREATED_AT', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  sysCreatedAt: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'SYS_UPDATED_AT', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  sysUpdatedAt: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tarjeta>) {
    super(data);
  }
}

export interface TarjetaRelations {
  // describe navigational properties here
}

export type TarjetaWithRelations = Tarjeta & TarjetaRelations;
