import { UserService } from "../services/UserService";
import { Request, Response } from "express";
import { checkPassword } from "../util/hash";

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
      res.json({ message: "success" });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}
