import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'users', table: 'asociado'}}})
export class Asociado extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ALTURA', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  altura: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'CALLE', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  calle: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'CREATED_AT', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  createdAt: string;

  @property({
    type: 'string',
    required: true,
    length: 25,
    mysql: {columnName: 'CUIT', dataType: 'varchar', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  cuit: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'EMAIL', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  email: string;

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
    type: 'geopoint',
    mysql: {columnName: 'LATITUD', dataType: 'point', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  latitud?: string;

  @property({
    type: 'geopoint',
    mysql: {columnName: 'LONGITUD', dataType: 'point', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  longitud?: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'RAZON_SOCIAL', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  razonSocial: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Asociado>) {
    super(data);
  }
}

export interface AsociadoRelations {
  // describe navigational properties here
}

export type AsociadoWithRelations = Asociado & AsociadoRelations;
