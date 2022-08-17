import { Knex } from "knex";
import { RecipientWithPage } from "../model/recipient";
import { CatFood } from "../model/store";

export class HomeService {
  constructor(private readonly knex: Knex) {}

  getCatfood = async (page:number) : Promise<CatFood>=> {
    const catFoodData = await this.knex("store").where("type","Cat Food").paginate({ perPage: 9, currentPage: page })
    
    // return catFoodData
    // return this.knex<User>("users").where("username", username);
    return catFoodData;
  }
  getCatToy = async (page:number) : Promise<CatFood>=> {
    const catFoodData = await this.knex("store").where("type","Cat Toy").paginate({ perPage: 9, currentPage: page })
    // return catFoodData
    // return this.knex<User>("users").where("username", username);
    return catFoodData;
  }

  getRecipient = async (page:number,userid:number) : Promise<RecipientWithPage>=>{
    const userRecipient = await this.knex("recipient").where("userid",userid).paginate({ perPage: 1, currentPage: page })
    return userRecipient

  }
}
