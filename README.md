## Links

[GraphQL](http://localhost:3000/graphql) - ссылка на приложение после запуска

## Сервисы

authors-service - микросервис авторов<br />
library-service - клиент, который подключается к микросервису authors-serviceи содержит в себе сервисы по книгам и издателям

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
