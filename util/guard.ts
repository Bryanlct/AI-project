import { Request, Response, NextFunction } from "express";

export const isLoggedInStatic = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session["user"]) {
    return next();
  }
  res.render("public/home");
};
