import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {postgresql: {schema: 'benefit', table: 'BENEFIT'}},
 
  
})
export class Benefit extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {
      columnName: 'id'
    }
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'associate_id'
    }
  })
  associate_id: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'benefit_name'
    }
  })
  benefit_name: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'benefit_price'
    }
  })
  benefit_price: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'benefit_points'
    }
  })
  benefit_points: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'benefit_description'
    }
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
