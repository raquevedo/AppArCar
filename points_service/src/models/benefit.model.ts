import {Entity, model, property} from '@loopback/repository';

@model()
export class Benefit extends Entity {
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
  id_associate: string;

  @property({
    type: 'string',
    required: true,
  })
  benefit_name: string;

  @property({
    type: 'number',
    required: true,
  })
  benefit_price: number;

  @property({
    type: 'number',
    required: true,
  })
  benefit_points: number;

  @property({
    type: 'string',
    required: true,
  })
  benefit_description: string;


  constructor(data?: Partial<Benefit>) {
    super(data);
  }
}

export interface BenefitRelations {
  // describe navigational properties here
}

export type BenefitWithRelations = Benefit & BenefitRelations;
