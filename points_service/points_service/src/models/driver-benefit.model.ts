import {Entity, model, property,} from '@loopback/repository';

@model({
 settings: { postgresql: {schema: 'driver_benefit', table: 'DRIVER_BENEFIT'} },
 foreignKeys: {
    fk_benefitId: {
      name: 'fk_benefitId',
      entity: 'Benefit',
      entityKey: 'id',
      foreignKey: 'benefit_id',
      onDelete: 'CASCADE',
      onUpdate: 'SET NULL'
    },
  },
})
export class DriverBenefit extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'id'
    }
  })
  id?: string;


  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'benefit_id'
    }
  })
  benefit_id: string;


  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'driver_id'
    }
  })
  driver_id: string;


  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'creation_date'
    }
  })
  creation_date: string;


  constructor(data?: Partial<DriverBenefit>) {
    super(data);
  }
}

export interface DriverBenefitRelations {
  // describe navigational properties here
}

export type DriverBenefitWithRelations = DriverBenefit & DriverBenefitRelations;
