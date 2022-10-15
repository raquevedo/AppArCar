import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import {AuthenticationComponent, registerAuthenticationStrategy} from '@loopback/authentication';
import { AdministratorStragey } from './strategies/admin.strategy';
import { JWTAuthenticationComponent } from '@loopback/authentication-jwt';
import {
  ConsumersBooter,
  MessageHandlerErrorBehavior,
  QueueComponent,
  RabbitmqBindings,
  RabbitmqComponent,
  RabbitmqComponentConfig,
} from 'loopback-rabbitmq';

export {ApplicationConfig};

export class ParkingServiceApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.component(JWTAuthenticationComponent);
    registerAuthenticationStrategy(this, AdministratorStragey);
    this.component(AuthenticationComponent);

    this.configure

    this.configure<RabbitmqComponentConfig>(RabbitmqBindings.COMPONENT).to({
      options: {
        protocol: 'amqp',
        hostname: 'localhost',
        port: 5672, 
        username: 'guest',
        password: 'guest',
        vhost: '/',
      },
      producer:{
        idleTimeoutMillis: 10000
      },
      consumer: {
        retries: 0, 
        interval: 1500,
      },
      defaultConsumerErrorBehavior: MessageHandlerErrorBehavior.ACK,
      prefetchCount: 10,
      exchanges: [
        {
          name: '',
          type: 'direct',
        }
      ],
    });

    this.component(RabbitmqComponent);
    
    //Bind classes to listen Events
  
    this.booters(ConsumersBooter);
    this.component(QueueComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
      consumers: {
        dirs: ['consumers'],
        extensions: ['.consumer.js'],
        nested: true,
      }
      
    };
  }
}
