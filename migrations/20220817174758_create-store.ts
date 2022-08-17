import { Knex } from "knex";

// id Serial (increments)
// username String (255)
// password String (255)
// created_at Date (timestamp)
// updated_at Date (timestamp)

export async function up(knex: Knex): Promise<void> {
  const hasUserTable = await knex.schema.hasTable("users");
  const hasStoreTable = await knex.schema.hasTable("store");
  const hasRecipientTable = await knex.schema.hasTable("recipient");
  if (!hasUserTable) {
    await knex.schema.createTable("users", (table) => {
      table.increments();
      table.string("username", 255);
      table.string("password", 255);
      table.timestamps(false, true);
    });
  }
 
  if(!hasStoreTable){
    await knex.schema.createTable("store",(table)=>{
      table.increments();
      table.string("type",255);
      table.string("name",255);
      table.string("description",1000);
      table.string("imageUrl",255);
      table.integer("stock",undefined);
      table.double("price",undefined);
      table.timestamps(false, true);
    });
  }

  if(!hasRecipientTable){
    await knex.schema.createTable("recipient",(table)=>{
      table.increments();
      table.string("userid",255);
      table.string("name",255);
      table.string("email",255);
      table.string("cartData",255);
      table.string("payment",255);
      table.string("method",255)
      table.string("address",255);
      
      table.timestamps(false, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("store");
  await knex.schema.dropTableIfExists("recipient");
}
