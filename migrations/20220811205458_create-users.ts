import { Knex } from "knex";

// id Serial (increments)
// username String (255)
// password String (255)
// created_at Date (timestamp)
// updated_at Date (timestamp)

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable("users");
  if (!hasTable) {
    await knex.schema.createTable("users", (table) => {
      table.increments();
      table.string("username", 255);
      table.string("password", 255);
      table.timestamps(false, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}
