import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'paymentsdb',
  connector: 'postgresql',
  url: 'postgresql://ms_payments_app:pwdpaymentsapp@paymentsDb:5432/paymentsDb',
  host: 'paymentsDb',
  port: 5432,
  user: 'ms_payments_app',
  password: 'pwdpaymentsapp',
  database: 'paymentsDb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PaymentsdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'paymentsdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.paymentsdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
