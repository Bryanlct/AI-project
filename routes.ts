import express from "express";
import { homeRoutes } from "./routers/homeRoutes";

import { userRoutes } from "./routers/userRoutes";

export const routes = express.Router();
routes.use("/",homeRoutes)
routes.use("/users", userRoutes);
