import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'authDb',
  connector: 'postgresql',
  url: 'postgresql://ms_auth_app:pwdauthsapp@authDb:5432/authDb',
  host: 'authDb',
  port: 5432,
  user: 'ms_auth_app',
  password: 'pwdauthsapp',
  database: 'authDb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AuthdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'authdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.authdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
