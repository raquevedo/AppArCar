import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'parkingdb',
  connector: 'postgresql',
  url: 'postgresql://ms_parking_app:pwdparkingapp@parkingDb:5432/parkingDb',
  host: 'parkingDb',
  port: 5432,
  user: 'ms_parking_app',
  password: 'pwdparkingapp',
  database: 'parkingDb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ParkingdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'parkingdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.parkingdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
