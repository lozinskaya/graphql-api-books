
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAuthorInput {
    firstName: string;
    lastName: string;
}

export class CreateBookInput {
    title: string;
    publishedAt: string;
    authorsIds: Nullable<number>[];
    publisherId: number;
}

export class CreatePublisherInput {
    title: string;
}

export class Author {
    id: number;
    firstName: string;
    lastName: string;
    books?: Nullable<Nullable<Book>[]>;
}

export abstract class IQuery {
    authors: Nullable<Author>[];
    author?: Nullable<Author>;
    books: Nullable<Book>[];
    book?: Nullable<Book>;
    publishers: Nullable<Publisher>[];
    publisher?: Nullable<Publisher>;
}

export abstract class IMutation {
    createAuthor?: Author;
    createBook?: Nullable<Book>;
    createPublisher?: Nullable<Publisher>;
}

export class Book {
    id: number;
    title: string;
    publishedAt: string;
    authors?: Nullable<Nullable<Author>[]>;
    publisher?: Nullable<Publisher>;
}

export class Publisher {
    id: number;
    title: string;
    books?: Nullable<Nullable<Book>[]>;
    authors?: Nullable<Nullable<Author>[]>;
}

type Nullable<T> = T | null;
