## Links

[GraphQL](http://localhost:3000/graphql) - ссылка на приложение после запуска

## Сервисы

authors-service - микросервис авторов<br />
publishers-service - микросервис издателей<br />
library-service - клиент, который подключается к микросервисам книг и авторов, а также содержит в себе сервис по книгам

## Запуск одной командой

```bash
$ docker compose build && docker compose up
```

## Установка зависимостей

```bash
$ npm install
```

## Запуск сервисов
### authors-service
```bash
## development
$ npm run start authors-service
## watch mode
$ npm run start:dev authors-service
## production mode
$ npm run start:prod authors-service
```
### publishers-service
```bash
# development
$ npm run start publishers-service
# watch mode
$ npm run start:dev publishers-service
# production mode
$ npm run start:prod publishers-service
```
### library-service
```bash
# development
$ npm run start library-service
# watch mode
$ npm run start:dev library-service
# production mode
$ npm run start:prod library-service
```

## Commit

```bash
# conventional-commit
$ git cz
```
