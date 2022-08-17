import { IWithPagination } from "knex-paginate";

export interface Store {
    id:number,
    type:string,
    name:string,
    description:string,
    imageUrl:string,
    stock:number,
    price:number,
    created_at:Date,
    updated_at:Date,
}


export interface CatFood extends IWithPagination<Store>{}

export type InsertStoreData = Omit<Store,"id" | "created_at" | "updated_at">