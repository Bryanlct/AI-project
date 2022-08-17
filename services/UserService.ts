import { Knex } from "knex";
import { InsertRecipientData } from "../model/recipient";
import { User } from "./model";

export class UserService {
  constructor(private readonly knex: Knex) {}

  getUserByUsername = (username: string) =>
    this.knex<User>("users").where("username", username).first();

  getUserByUserId = (id: number) => {

    const user = this.knex<User>("users").where("id", id) 
    return user
  }

  setRecipient = async (cartData : InsertRecipientData) => {
    await this.knex('recipient').insert(cartData);
  }
}
