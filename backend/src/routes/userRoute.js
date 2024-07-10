import express from "express";
import * as userController from "../controllers/userController.js";

const route = express.Router();

route.post("/login", userController.login);
route.post("/signup", userController.signup);
route.post("/logout", userController.logout);

export default route;
