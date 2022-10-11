import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'pkg_parking_settings'}
  }
})
export class PkgParkingSettings extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id_parking', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idParking: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_monday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  startMonday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_monday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  endMonday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_tuesday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  startTuesday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_tuesday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  endTuesday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_wednesday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  startWednesday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_wednesday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  endWednesday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_thursday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  startThursday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_thursday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  endThursday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_friday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  startFriday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_friday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  endFriday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_saturday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  startSaturday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_saturday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  endSaturday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_sunday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  startSunday?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_sunday', dataType: 'time without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  endSunday?: string;

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

  constructor(data?: Partial<PkgParkingSettings>) {
    super(data);
  }
}

export interface PkgParkingSettingsRelations {
  // describe navigational properties here
}

export type PkgParkingSettingsWithRelations = PkgParkingSettings & PkgParkingSettingsRelations;
