FROM node:8.15.0

WORKDIR /use r/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm","start"]