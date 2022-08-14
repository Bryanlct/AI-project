import { UserService } from "../services/UserService";
import { Request, Response } from "express";
import { checkPassword } from "../util/hash";

export class UserController {
  constructor(private readonly userService: UserService) {}

  login = async (req: Request, res: Response) => {
    try {
      console.log(req.params);
      console.log(req.query);
      console.log(req.body);
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
}
