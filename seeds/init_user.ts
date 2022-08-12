import { Knex } from "knex";
import { hashPassword } from "../util/hash";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { username: "admin", password: await hashPassword("aaa") },
  ]);
}
