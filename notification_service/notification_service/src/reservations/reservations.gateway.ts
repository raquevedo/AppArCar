/*
import {
  OnGatewayInit,
  WebSocketGateway,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect
} from "@nestjs/websockets";
import { Server } from "http";
import { ReservationsService } from "./reservations.service";

@WebSocketGateway(80, {namespace: 'reservations'})
export class ReservationsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server;
  wsClients = [];

  private broadcast(event: any, message: any) {
    const broadCastMessage = JSON.stringify(message);
    for (let c of this.wsClients) {
      c.emit(event, broadCastMessage);
    }
  }

  // Creates service instance
  constructor(private reservationService: ReservationsService) {}
  
  // Once Web Socket initializes
  afterInit(): void {
    console.log('Web Socket initialized')
  }

  // When the client connects to the server
  handleConnection(client: any, ...args: any[]): WsResponse<string> {
    console.log(`Client subscribed ${client}`);
    this.wsClients.push(client);

    // client.emit('subscribe_confirmation', 'Hello');
    return {event:'connection' , data:'Hello'};
  }

  handleDisconnect(client: any): void {
    console.log(`Client disconnected ${client}`);
  }

  // Emits a reservation event
  notifyClient(data): void {
    console.log(`Reservation emitted ${data}`)

    // TODO: Send message only to the specified driver
    this.broadcast('reservation', data);
  }
}
*/

import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ReservationsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }

  notifyClient(data): void {
    console.log(`Reservation emitted ${data}`)
  }
}