import {Entity, model, property} from '@loopback/repository';

@model()
export class Benefit extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  partner_id: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  points: number;

  @property({
    type: 'date',
    required: true,
  })
  exp_dt: string;

  @property({
    type: 'string',
    required: true,
  })
  state: string;

  @property({
    type: 'date',
    required: true,
  })
  creation_dt: string;

  @property({
    type: 'date',
  })
  sys_created_at_dttm?: string;

  @property({
    type: 'date',
  })
  sys_updated_at_dttm?: string;


  constructor(data?: Partial<Benefit>) {
    super(data);
  }
}

export interface BenefitRelations {
  // describe navigational properties here
}

export type BenefitWithRelations = Benefit & BenefitRelations;
