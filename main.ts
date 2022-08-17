import dotenv from "dotenv";
dotenv.config();

import express from "express";
import expressSession from "express-session";
import Knex from "knex";
import * as knexConfig from "./knexfile";
import { isLoggedInStatic } from "./util/guard";
import { attachPaginate } from  "knex-paginate";

const app = express();
const knex = Knex(knexConfig[process.env.NODE_ENV || "development"]);


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

attachPaginate();
app.set("view engine", 'ejs');


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
import { HomeController } from "./controllers/homeController";
import { HomeService } from "./services/HomeService";
const userService = new UserService(knex);
const homeService = new HomeService(knex);
export const userController = new UserController(userService);
export const homeController = new HomeController(homeService);
import { routes } from "./routes";


app.use("/",routes)

app.use("/api", routes);

// app.use(express.static(path.join(__dirname, "public")));

// app.use(
//   isLoggedInStatic,
//   express.static(path.join(__dirname, "private"))
// );
app.use(express.static("public"));

app.use(isLoggedInStatic, express.static("private"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  //logger
  console.log(`[INFO] listen on port ${PORT}`);
});
