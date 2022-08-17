import { IWithPagination } from "knex-paginate";

export interface Recipient {
    id:number,
    userid:number,
    email:string,
    name:string,
    cartData:string,
    payment:string,
    method:string,
    address:string,
    created_at:Date,
    updated_at:Date,
}
export interface RecipientWithPage extends IWithPagination<Recipient>{}
export type InsertRecipientData = Omit<Recipient,"id" | "created_at" | "updated_at">