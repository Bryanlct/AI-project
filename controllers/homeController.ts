import { Request, Response } from "express";
import { HomeService } from "../services/HomeService";

export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  renderBodyPage = async (req: Request, res: Response) => {
    
    
    // http://localhost:3000/messageType=info&messageContent=test
    if (req.session["user"]) {
      return res.render("home", { route: "body", login: true });
    }

    // if (messageInfo.messageType == "error") {

    // }
    // if (messageInfo.messageType == "success") {

    // }
    // if (messageInfo.messageType == "info") {
      
    //   return res.render("home", {
    //     route: "body",
    //     login: true,
    //     messageType: messageInfo.messageType,
    //     messageContent: messageInfo.messageContent,
    //   });
    // }

    
      return res.render("home", {
        route: "body",
        login: false,
      });
    
  };

  renderLoginPage = async (req: Request, res: Response) => {
    if (req.session["user"]) {
      return res.render("home", { route: "body", login: true });
    }
    return res.render("home", { route: "login", login: false });
  };
  renderAboutPage = async (req: Request, res: Response) => {
    if (req.session["user"]) {
      return res.render("home", { route: "about", login: true });
    }
    return res.render("home", { route: "about", login: false });
  };
  renderCatFoodPage = async (req: Request, res: Response) => {
    const showPage = req.query.page;
    let catFoodData;

    try {
      if (!showPage) {
        res.status(404).json({ error: "Dataset not found" });
        return;
      }
      if (typeof showPage !== "string") {
        res.status(500).json({ error: "Invalid dataset" });
        return;
      }
      catFoodData = await this.homeService.getCatfood(parseInt(showPage));
    } catch (e) {
      res.status(500).json({ error: e.toString() });
    }

    // const catFoodData = await this.homeService.getCatfood(showPage);
    console.log(catFoodData?.data.length);
    if (req.session["user"]) {
      return res.render("home", {
        route: "catfood",
        login: true,
        data: catFoodData,
      });
    }
    return res.render("home", {
      route: "catfood",
      login: false,
      data: catFoodData,
    });
  };

  renderCatToyPage = async (req: Request, res: Response) => {
    const showPage = req.query.page;
    let catFoodData;

    try {
      if (!showPage) {
        res.status(404).json({ error: "Dataset not found" });
        return;
      }
      if (typeof showPage !== "string") {
        res.status(500).json({ error: "Invalid dataset" });
        return;
      }
      catFoodData = await this.homeService.getCatToy(parseInt(showPage));
    } catch (e) {
      res.status(500).json({ error: e.toString() });
    }

    // const catFoodData = await this.homeService.getCatfood(showPage);
    console.log(catFoodData?.data.length);
    if (req.session["user"]) {
      return res.render("home", {
        route: "cattoys",
        login: true,
        data: catFoodData,
      });
    }
    return res.render("home", {
      route: "cattoys",
      login: false,
      data: catFoodData,
    });
  };

  renderTrackingPage = async (req: Request, res: Response) => {
    
    
    if (req.session["user"]) {
      const showPage = req.query.page;
      let recipient;

      try {
        if (!showPage) {
          res.status(404).json({ error: "Dataset not found" });
          return;
        }
        if (typeof showPage !== "string") {
          res.status(500).json({ error: "Invalid dataset" });
          return;
        }
        recipient = await this.homeService.getRecipient(parseInt(showPage),req.session["user"].id);
        recipient.data[0].cartData = JSON.parse(recipient.data[0].cartData)
      } catch (e) {
        res.redirect('/')
      }
      console.log(recipient)
      return res.render("home", { route: "track", login: true ,data:recipient});
    }
    return res.render("home", { route: "login", login: false });
  };

}
