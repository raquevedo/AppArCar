# AppArCar
CAECE University Final Proyect - Node-based mobile application

Tools used: React, React Native, PostgreSQL, RabbitMQ, Socket.io (Web Sockets), Loopback, NestJS, Foundation CSS, Docker and Docker Compose.

# Execution

Requires docker-compose v1.29+
curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

## With Make

$ make kong-dbless

## With Docker-compose

$ docker-compose up --build

## Web Frontend

$ cd frontend_web_service/frontend
$ npm install
$ npm start (choose yes when it asks to change ports)

## Native Frontend

$ cd mobileClient
$ npm start

Scan the QR code with either an Iphone or the ExpoGo app on Android

# Deployment

AppArCar uses Kong as an API Gateway with every service executed locally (can be moved to the cloud by changing the config)

In order to have the containers be able to communicate locally we use the kong-net local network

# MicroServices

## Auth_service

Handles authentication and generates JSON web tokens that must be sent to the other microservices for authorization

Tools used: Loopback, PostgreSQL
Author: Ramiro Quevedo

Path: /auth
> [Release notes](auth_service/README.md)

## Notification_service

Creates a Web Sockets server to send live updates to the frontend, uses event-driven architecture.

Tools used: NestJS, Rabbitmq, Socket.io
Author: Ramiro Quevedo

## Geolocation_service

Uses the Google API to find an address' coordinates

Tools used: NestJS, Python, url scraping
Authors: Maximiliano Gilberto, Ramiro Quevedo

Path: /geo

## User_service

Handles driver user information and changes to their profiles

Tools used: Loopback, PostgreSQL
Author: Federico Aballay

Path: /user
> [Release notes](user_service/README.md)

## Parking_service

Handles information related to the partners' parking lots and interactions with the drivers

Tools used: Loopback, PostgreSQL
Author: Federico Aballay

Path: /parking

## Payments_service

Handles sensitive payment information and monetary transactions

Tools used: Loopback, PostgreSQL
Author: Federico Aballay

Path: /payment

# Frontend

## Native

Mobile application meant to be used by the target user (drivers) in order to make reservations in the subscribed parking lots.

Lead: Maximiliano Gilberto
UI: Juan Jose Passo

## Web

Web application used by parking lot owners in order to manage reservations and configure their businesses.

Lead & UI: Ramiro Quevedo
