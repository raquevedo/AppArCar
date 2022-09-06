FROM node:16

# Create app directory
WORKDIR /usr/src/app/
COPY /backend ./backend
COPY /frontend ./frontend

EXPOSE 3000
EXPOSE 80
EXPOSE 443

WORKDIR /usr/src/app/backend/
RUN npm install
RUN npm ci --only=production

CMD [ "npm", "start"]