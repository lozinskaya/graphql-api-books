FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist/apps/publishers-service  ./dist/apps/publishers-service

CMD ["npm", "run", "start:dev", "publishers-service"]
