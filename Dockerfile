FROM node:lts-alpine

WORKDIR /home/node/api

RUN mkdir node_modules & chown -R node:node .

COPY package.json yarn.* ./

USER node

COPY --chown=node:node . .

RUN yarn

EXPOSE 3333

CMD ["yarn", "start"]
