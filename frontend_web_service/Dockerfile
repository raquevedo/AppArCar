FROM node:16

# Create app directory
WORKDIR /usr/src/app/
COPY /backend ./backend
COPY /frontend ./frontend

WORKDIR /usr/src/app/frontend/
RUN npm install
RUN npm run build

EXPOSE 3002
EXPOSE 80
EXPOSE 443

WORKDIR /usr/src/app/backend/
RUN npm install
RUN npm ci --only=production

CMD [ "npm", "start"]