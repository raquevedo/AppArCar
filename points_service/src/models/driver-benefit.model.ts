import {Entity, model, property} from '@loopback/repository';

@model()
export class DriverBenefit extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_benefit: string;

  @property({
    type: 'string',
    required: true,
  })
  id_driver: string;

  @property({
    type: 'date',
    required: true,
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
