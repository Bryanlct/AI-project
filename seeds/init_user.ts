import { Knex } from "knex";
import { InsertStoreData } from "../model/store";
import { hashPassword } from "../util/hash";

export async function seed(knex: Knex): Promise<void> {
  // Data Array
  let store: InsertStoreData[] = [];

  store.push(
    {
      type: "Cat Food",
      name: "Stella & Chewys Cat Food - Freeze-Dried Dinner Morsels - Yummy Lickin Salmon & Chicken 18oz",
      description:
        "Raw, wild-caught fish & cage-free chicken 98% fish & chicken, nutrient-rich organs & bone Fortified with added vitamins & minerals",
      imageUrl:
        "https://www.epet.hk/media/catalog/product/cache/35d23b042e32d83bc62cd844cb4d731e/1/4/143116_main._ac_sl1500_v1537293465__1.jpg",
      stock: 10000,
      price: 231.4,
    },
    {
      type: "Cat Food",
      name: "CANAGAN - LIGHT / SENIOR FOR CATS 1.5kg",
      description: `CANAGAN GRAIN FREE DRY FOOD FOR CAT PHOTO FOR REFERENCE ONLY, PACKAGING MAY NOT SAME WITH PHOTO.`,
      imageUrl:
        "https://shoplineimg.com/5921471e9f9a4f885700420b/617626e2d0c8410038a481ff/800x.webp?source_format=png",
      stock: 10000,
      price: 373.0,
    },
    {
      type: "Cat Food",
      name: "Stella & Chewys Cat Food - Freeze-Dried Dinner Morsels - Absolutely Rabbit 18oz",
      description:
        "Raw, farm-raised rabbit 98% rabbit, nutrient-rich organs & bone Fortified with added vitamins & minerals Rich in taurine and probiotics for dietary health",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/ziwipeak-air-dried-cat-food-mackerel-lamb-1kg-cats-771_608x608.jpg?v=1634557031",
      stock: 10000,
      price: 594.0,
    },
    {
      type: "Cat Food",
      name: "CANAGAN - Chicken with Salmon for Cats (75g x 12 Cans)",
      description:
        "Tender shredded chicken with delicious morsels of salmon, simply cooked in its own natural gravy. Appropriate Ratio of Meat to Vege Grain Free 65% Nutritious Animal Ingredients 35% Vege & Botanicals",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0379/5923/7764/products/tunaadult_1800x1800.png?v=1632908305",
      stock: 10000,
      price: 257.8,
    },
    {
      type: "Cat Food",
      name: "Anxiety And Stress For Cat 4 Oz By King Bio Natural Medicines",
      description: `Homeopathic treatment for loud noises cowering`,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0379/5923/7764/products/kangaroo_1800x1800.png?v=1632908498",
      stock: 10000,
      price: 117.56,
    },
    {
      type: "Cat Food",
      name: "Orijen - Guardian 8 Cat Food",
      description: `Made with free run chicken, wild caught salmon & rabbit`,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0029/1245/2721/products/Boreal_Chicken_Formular_12lbs_360x.png?v=1565620410",
      stock: 10000,
      price: 875.0,
    },
    {
      type: "Cat Food",
      name: "Ziwipeak - New Zealand KAHAWAI Recipe Canned Cat Food - 85G (min. 24 cans)",
      description: `Pure and simple, for cats of all breeds and life stages. Featuring whole Kahawai, wild and sustainably caught from the pristine waters New`,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/ziwipeak-new-zealand-kahawai-recipe-canned-cat-food-85g-min-24-cans-cats-211_480x480.jpg?v=1639020839",
      stock: 10000,
      price: 35.0,
    },
    {
      type: "Cat Food",
      name: "Stella & Chewys - Dry Cat Food - Raw Blend Kibble - Cage Free Recipe - 10LB",
      description: `Stella & Chewy Raw Blend kibble for cats delivers a unique combination of protein-rich`,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/stella-chewys-dry-cat-food-raw-blend-kibble-cage-free-recipe-10lb-cats-841_480x480.jpg?v=1643176465",
      stock: 10000,
      price: 575.0,
    },
    {
      type: "Cat Food",
      name: "Orijen Cat & Kitten",
      description:
        "Raw, farm-raised rabbit 98% rabbit, nutrient-rich organs & bone Fortified with added vitamins & minerals Rich in taurine and probiotics for dietary health",
      imageUrl:
        "https://shop.divit.com.hk/wp-content/uploads/2022/07/VET-010-00406-Orijen-Cat-_-Kitten.jpg",
      stock: 10000,
      price: 435.0,
    },
    {
      type: "Cat Food",
      name: "Ziwipeak - Air Dried Cat Food FREE RANGE CHICKEN - 1KG",
      description:
        "Raw farmraised rabbit 98 rabbit nutrientrich organs bone Fortified with added vitamins minerals Rich in taurine and probiotics for dietary health",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/ziwipeak-air-dried-cat-food-free-range-chicken-1kg-cats-170_480x480.jpg?v=1634557035",
      stock: 10000,
      price: 594.0,
    },
    {
      type: "Cat Food",
      name: "Acana - Regional Pacifica Grain Free Cat Food",
      description: `When it comes to ACANA® food for dogs, every ingredient matters.`,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0379/5923/7764/products/Acana-RegionalPacifica-4.5kg_1800x1800.png?v=1651130852",
      stock: 10000,
      price: 660.0,
    },

    {
      type: "Cat Toy",
      name: "PETKIT - Catpedia Cat Scratcher",
      description: `PETKIT - Catpedia Cat Scratcher`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/62ab6d1907faae0018bdd99a/800x.webp?source_format=jpg",
      stock: 10000,
      price: 89.0,
    },
    {
      type: "Cat Toy",
      name: "PETKIT - Bingo Cat Teasing Toy Cat Teaser",
      description: `PETKIT - Bingo Cat Teasing Toy Cat Teaser.`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/6261672340d5c9001588a637/800x.webp?source_format=jpg",
      stock: 10000,
      price: 69.0,
    },
    {
      type: "Cat Toy",
      name: "Touchdog - Caterpillar Series Cat Teaser Toy",
      description: `Touchdog - Caterpillar Series Cat Teaser Toy.`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/612d0d7d86398400387f615a/800x.webp?source_format=jpg",
      stock: 10000,
      price: 39.0,
    },
    {
      type: "Cat Toy",
      name: "PETSHOP PLAID FISH CAT TOYS",
      description: `Cotton canvas pet toy printed with waterbase, non-toxic inks. .`,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0263/2908/8075/products/904026_plaid_fish_PHOTO_720x.jpg?v=1619467514",
      stock: 10000,
      price: 29.0,
    },
    {
      type: "Cat Toy",
      name: "PETSHOP CHARMING CHUMS CAT TOYS",
      description: `Cotton canvas pet toy printed with waterbase, non-toxic inks. .`,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0263/2908/8075/products/904025_charmingchums_PHOTOcopy_720x.jpg?v=1619467452",
      stock: 10000,
      price: 29.0,
    },
    {
      type: "Cat Toy",
      name: "Catit - Pirates Barrel Cat Scratcher",
      description: `Perfect spot for both small and large catsto scratch and relax.`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/62615b806f5dcc002146440a/800x.webp?source_format=jpg",
      stock: 10000,
      price: 199.0,
    },
    {
      type: "Cat Toy",
      name: "GiGwi - Melody Chaser (Bee) Cat Toy",
      description: `GiGwi - Melody Chaser (Bee) Cat Toy.`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/6261610369264a001e579082/800x.webp?source_format=jpg",
      stock: 10000,
      price: 39.0,
    },
    {
      type: "Cat Toy",
      name: "Petz Route - Ping-Pong Ball with Matatabi (2pcs)",
      description: `Petz Route - Ping-Pong Ball with Matatabi (2pcs).`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/60c8c9b652037f003e7cf18a/800x.webp?source_format=jpg",
      stock: 10000,
      price: 39.0,
    },
    {
      type: "Cat Toy",
      name: "GiGwi - Melody Chaser (Bird) Cat Toy",
      description: `GiGwi - Melody Chaser (Bird) Cat Toy`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/612781675c627800112eb2bc/800x.webp?source_format=jpg",
      stock: 10000,
      price: 49.0,
    },
    {
      type: "Cat Toy",
      name: "Smack - 100% Matatabi Stuffed Cat Toy (Koi Fish)",
      description: `Smack - 100% Matatabi Stuffed Cat Toy (Koi Fish)`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/62ab49e33389cc000ffbfe40/800x.webp?source_format=png",
      stock: 10000,
      price: 129.0,
    },
    {
      type: "Cat Toy",
      name: "Smack - 100% Matatabi Stuffed Cat Toy (Pacific Saury)",
      description: `Smack - 100% Matatabi Stuffed Cat Toy (Pacific Saury)`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/6261916823bcb70015685a04/800x.webp?source_format=jpg",
      stock: 10000,
      price: 129.0,
    },
    {
      type: "Cat Toy",
      name: "Smack - 100% Matatabi Stuffed Cat Toy (Rainbow Trout)",
      description: `Smack - 100% Matatabi Stuffed Cat Toy (Rainbow Trout)`,
      imageUrl:
        "https://shoplineimg.com/5f4c8d639271d80047ffe63d/626195ea4ed06d002d855893/800x.webp?source_format=jpg",
      stock: 10000,
      price: 159.0,
    }
  );

  // Deletes ALL existing entries
  await knex("users").del();
  await knex("store").del();
  // Inserts seed entries
  await knex("users").insert([
    { username: "admin", password: await hashPassword("aaa") },
    { username: "user", password: await hashPassword("aaa") },
    { username: "chun", password: await hashPassword("aaa") },
    { username: "chung", password: await hashPassword("aaa") },
    { username: "yuet", password: await hashPassword("aaa") },
    { username: "sing", password: await hashPassword("aaa") },
  ]);
  await knex("store").insert(store);
}
