FROM node:16-alpine as builder

ENV NODE_ENV build
ENV PIP_ROOT_USER_ACTION=ignore

USER root
WORKDIR /home/node

COPY package*.json ./
RUN apk add --no-cache python3-dev py3-pip \
    && pip3 install requests \
    && npm install

COPY --chown=node:node . .
RUN npm run build \
    && npm prune --production

# ---

FROM node:16-alpine

ENV NODE_ENV production
ENV PIP_ROOT_USER_ACTION=ignore

USER root
WORKDIR /home/node

RUN apk add --no-cache python3-dev py3-pip \
    && pip3 install requests
USER node
COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/
COPY --from=builder --chown=node:node /home/node/src/coords.py ./coords.py

CMD ["node", "dist/main.js"]
