import express from "express";
import { homeController } from "../main";

export const homeRoutes = express.Router();

//http method:post
//path: /login
homeRoutes.get("/", homeController.renderBodyPage);

homeRoutes.get("/login", homeController.renderLoginPage);

homeRoutes.get("/about", homeController.renderAboutPage);

homeRoutes.get("/catfood", homeController.renderCatFoodPage);

homeRoutes.get("/cattoys", homeController.renderCatToyPage);

homeRoutes.get('/track',homeController.renderTrackingPage)