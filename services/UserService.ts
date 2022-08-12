import { Knex } from "knex";
import { User } from "./model";

export class UserService {
  constructor(private readonly knex: Knex) {}

  getUserByUsername = (username: string) =>
    this.knex<User>("users").where("username", username).first();
}
