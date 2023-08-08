FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist/apps/authors-service ./dist/apps/authors-service

CMD ["npm", "run", "start:dev", "authors-service"]
