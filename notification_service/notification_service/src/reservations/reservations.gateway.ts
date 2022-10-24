import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ReservationsService } from "./reservations.service";

@WebSocketGateway({
  transports: ['websocket'],
  cors: {
    origin: '*',
  },
})
export class ReservationsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
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
  handleConnection(client: Socket, ...args: any[]): WsResponse<string> {
    console.log(`Client subscribed ${client.id}`);
    this.wsClients.push(client);

    // client.emit('subscribe_confirmation', 'Hello');
    return {event:'connection' , data:'Hello'};
  }

  handleDisconnect(client: Socket): void {
    console.log(`Client disconnected ${client.id}`);
  }

  // Emits a reservation event
  notifyClient(data): void {
    console.log(`Reservation emitted ${data}`)

    // TODO: Send message only to the specified driver
    this.broadcast('reservation', data);
  }
}