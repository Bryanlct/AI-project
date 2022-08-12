import express from "express";
import { userController } from "../main";

export const userRoutes = express.Router();

//http method:post
//path: /login
userRoutes.post("/login", userController.login);
