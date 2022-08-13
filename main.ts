import dotenv from "dotenv";
dotenv.config();

import express from "express";
import expressSession from "express-session";
import Knex from "knex";
import * as knexConfig from "./knexfile";
import path from "path";
import { isLoggedInStatic } from "./util/guard";
import ejs from "ejs";

const app = express();
const knex = Knex(knexConfig[process.env.NODE_ENV || "development"]);

app.set("view engine", ejs);

app.use(express.json());

app.use(
  expressSession({
    secret: "Tecky Academy teaches typescript",
    resave: true,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  console.log(`[DEBUG] request path: ${req.path} method: ${req.method}`);
  next();
});

import { UserService } from "./services/UserService";
import { UserController } from "./controllers/UserController";

const userService = new UserService(knex);
export const userController = new UserController(userService);

import { routes } from "./routes";

app.use("/api", routes);

app.use(express.static(path.join(__dirname, "view", "public")));
app.use(
  isLoggedInStatic,
  express.static(path.join(__dirname, "view", "private"))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  //logger
  console.log(`[INFO] listen on port ${PORT}`);
});
