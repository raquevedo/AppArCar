import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'pointsDb',
  connector: 'postgresql',
  url: 'postgresql://ms_points_app:pwdpointsapp@pointsDb:5432/pointsDb',
  host: 'pointsDb',
  port: 5432,
  user: 'ms_points_app',
  password: 'pwdpointsapp',
  database: 'pointsDb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PointsDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'pointsDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.pointsDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
