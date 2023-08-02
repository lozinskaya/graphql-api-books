## Links

[GraphQL](http://localhost:3000/graphql) - link to playground

## Modules

Author - module with schema, query, mutation for Authors
Book - module with schema, query, mutation for Books
Publisher - module with schema, query, mutation for Authors
Common - common module witch imports author, book and publisher modules for resolve fields

## Installation with docker

```bash
$ docker compose build && docker compose up
```

## Installation without docker

```bash
$ npm install
```

## Running the app without docker

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Commit

```bash
# conventional-commit
$ git cz
```
