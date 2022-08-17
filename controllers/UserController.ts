import { UserService } from "../services/UserService";
import { Request, Response } from "express";
import { checkPassword } from "../util/hash";
import { InsertRecipientData } from "../model/recipient";

export class UserController {
  constructor(private readonly userService: UserService) {}

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        res.status(400).json({ message: "Invalid username or password" });
        return;
      }

      const user = await this.userService.getUserByUsername(username);
      if (!user || !(await checkPassword(password, user.password))) {
        res.status(400).json({ message: "Invalid username or password" });
        return;
      }

      req.session["user"] = { id: user.id };
      res.redirect("/");
      // res.json({ message: "success" });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  logout = async (req: Request, res: Response) => {
    if (req.session["user"]) {
      req.session.destroy(() => {
        console.log("destroyed");
      });
      return res.redirect("/");
    }

    return res.redirect("/");
  };

  receiveSubmitCart = async (req: Request, res: Response) => {
    if (req.session["user"] == undefined) {
      // return res.render("home", { route: "about", login: false });
      return res.redirect("/login");
    }
    // If Logined
    const user = await this.userService.getUserByUserId(req.session["user"].id);
    const cartData: InsertRecipientData = req.body;
    // Checking
    
    // if(!cartData.name){}
    // if(!cartData.address){}

    try {
      cartData.userid = user[0].id;
      cartData.name = user[0].username;
      
      if(cartData.name.length == 0){
        
        return res.redirect("/");
      }
      if(cartData.address.length == 0){
        return res.redirect("/");
      }
      if(cartData.email.length == 0){
        return res.redirect("/");
      }
      if(cartData.payment.length == 0){
        return res.redirect("/");
      }
      if(cartData.method.length == 0){
        return res.redirect("/");
      }
      if(cartData.cartData.length == 0){
        return res.redirect("/");
      }

      await this.userService.setRecipient(cartData)
      return res.redirect("/");
    } catch (e) {
      console.log(e);
      return res.redirect("/");
    }
    
  };
}
