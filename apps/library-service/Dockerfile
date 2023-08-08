FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist/apps/library-service ./dist/apps/library-service 

CMD ["npm", "run", "start:dev", "library-service"]
