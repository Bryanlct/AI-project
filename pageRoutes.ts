import express from "express";

export const pageRoutes = express.Router();

pageRoutes.get("/", (req, res) => {
  console.log(req.session["user"]);
  if (req.session["user"]) {
    return res.render("home", { route: "body", login: true });
  }
  return res.render("home", { route: "body", login: false });
});

pageRoutes.get("/login", (req, res) => {
  if (req.session["user"]) {
    return res.render("home", { route: "body", login: true });
  }
  return res.render("home", { route: "login", login: false });
});

pageRoutes.get("/about", (req, res) => {
    if (req.session["user"]) {
      return res.render("home", { route: "about", login: true });
    }
    return res.render("home", { route: "about", login: false });
});

pageRoutes.get("/catfood", (req, res) => {
    if (req.session["user"]) {
      return res.render("home", { route: "catfood", login: true });
    }
    return res.render("home", { route: "catfood", login: false });
});

pageRoutes.get("/cattoys", (req, res) => {
    if (req.session["user"]) {
      return res.render("home", { route: "cattoys", login: true });
    }
    return res.render("home", { route: "cattoys", login: false });
  });