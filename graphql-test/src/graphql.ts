
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateHamsterInput {
    exampleField?: Nullable<number>;
}

export class UpdateHamsterInput {
    id: number;
}

export class CreatePhoneInput {
    exampleField?: Nullable<number>;
}

export class UpdatePhoneInput {
    id: number;
}

export class Hamster {
    exampleField?: Nullable<number>;
    test?: Nullable<string>;
}

export abstract class IQuery {
    abstract hamsters(): Nullable<Hamster>[] | Promise<Nullable<Hamster>[]>;

    abstract hamster(id: number): Nullable<Hamster> | Promise<Nullable<Hamster>>;

    abstract phones(): Nullable<Phone>[] | Promise<Nullable<Phone>[]>;

    abstract phone(id: number): Nullable<Phone> | Promise<Nullable<Phone>>;
}

export abstract class IMutation {
    abstract createHamster(createHamsterInput: CreateHamsterInput): Hamster | Promise<Hamster>;

    abstract updateHamster(updateHamsterInput: UpdateHamsterInput): Hamster | Promise<Hamster>;

    abstract removeHamster(id: number): Nullable<Hamster> | Promise<Nullable<Hamster>>;

    abstract createPhone(createPhoneInput: CreatePhoneInput): Phone | Promise<Phone>;

    abstract updatePhone(updatePhoneInput: UpdatePhoneInput): Phone | Promise<Phone>;

    abstract removePhone(id: number): Nullable<Phone> | Promise<Nullable<Phone>>;
}

export class Phone {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
