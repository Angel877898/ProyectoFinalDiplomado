FROM node:latest

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node package*.json ./

RUN yarn install
COPY --chown=node . .
ENV HOST=0.0.0.0 PORT=3001

EXPOSE ${PORT}

CMD ["node", "app.js"]