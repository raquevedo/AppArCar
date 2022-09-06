# AppArCar
CAECE University Final Proyect - Node-based mobile application

# Execution

Requires docker-compose v1.29+
curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

## With Make

$ make kong-dbless

## With Docker-compose

$ docker-compose up --build

# Deployment

AppArCar uses Kong as an API Gateway with every service executed locally (can be moved to the cloud by changing the config)

In order to have the containers be able to communicate locally we use the kong-net local network

# MicroServices

## Auth_service

Handles authentication and generates JSON web tokens that must be sent to the other microservices for authorization

Path: /auth

## User_service

Handles driver user information and changes to their profiles

Path: /user

## Partner_service

Handles partner (users who manage parking lots) user information and changes to their profiles

Path: /partner

## Parking_service

Handles information related to the partners' parking lots and interactions with the drivers

Path: /parking

## Payment_service

Handles sensitive payment information and monetary transactions

Path: /payment