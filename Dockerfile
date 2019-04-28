FROM node:8.15.0

WORKDIR /use r/src/app

COPY package*.json ./

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm","start"]