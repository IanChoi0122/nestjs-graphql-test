
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCatInput {
    exampleField?: Nullable<number>;
}

export class UpdateCatInput {
    id: number;
}

export class CreateDogInput {
    exampleField?: Nullable<number>;
}

export class UpdateDogInput {
    id: number;
}

export class CreateHamsterInput {
    exampleField?: Nullable<number>;
}

export class UpdateHamsterInput {
    id: number;
}

export class Cat {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract cats(): Nullable<Cat>[] | Promise<Nullable<Cat>[]>;

    abstract cat(id: number): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract dogs(): Nullable<Dog>[] | Promise<Nullable<Dog>[]>;

    abstract dog(id: number): Nullable<Dog> | Promise<Nullable<Dog>>;

    abstract hamsters(): Nullable<Hamster>[] | Promise<Nullable<Hamster>[]>;

    abstract hamster(id: number): Nullable<Hamster> | Promise<Nullable<Hamster>>;
}

export abstract class IMutation {
    abstract createCat(createCatInput: CreateCatInput): Cat | Promise<Cat>;

    abstract updateCat(updateCatInput: UpdateCatInput): Cat | Promise<Cat>;

    abstract removeCat(id: number): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract createDog(createDogInput: CreateDogInput): Dog | Promise<Dog>;

    abstract updateDog(updateDogInput: UpdateDogInput): Dog | Promise<Dog>;

    abstract removeDog(id: number): Nullable<Dog> | Promise<Nullable<Dog>>;

    abstract createHamster(createHamsterInput: CreateHamsterInput): Hamster | Promise<Hamster>;

    abstract updateHamster(updateHamsterInput: UpdateHamsterInput): Hamster | Promise<Hamster>;

    abstract removeHamster(id: number): Nullable<Hamster> | Promise<Nullable<Hamster>>;
}

export class Dog {
    exampleField?: Nullable<number>;
}

export class Hamster {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
