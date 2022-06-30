import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'users', table: 'auto'}}})
export class Auto extends Entity {
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
    length: 10,
    mysql: {columnName: 'PATENTE', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  patente: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'MARCA', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'MODELO', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  modelo: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ANIO', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  anio: number;

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

  constructor(data?: Partial<Auto>) {
    super(data);
  }
}

export interface AutoRelations {
  // describe navigational properties here
}

export type AutoWithRelations = Auto & AutoRelations;
