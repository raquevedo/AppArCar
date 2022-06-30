import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'usersdb',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'ms_users_app',
  password: 'userspw',
  database: 'users'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UsersdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'usersdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.usersdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
