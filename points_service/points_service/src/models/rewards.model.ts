import {Entity, model, property} from '@loopback/repository';

@model()
export class Rewards extends Entity {
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
  benefit_id: number;

  @property({
    type: 'number',
    required: true,
  })
  driver_id: number;

  @property({
    type: 'date',
    required: true,
  })
  creation_dt: string;


  constructor(data?: Partial<Rewards>) {
    super(data);
  }
}

export interface RewardsRelations {
  // describe navigational properties here
}

export type RewardsWithRelations = Rewards & RewardsRelations;
