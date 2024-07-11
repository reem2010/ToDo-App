import express from "express";
import * as taskControllers from "../controllers/taskController.js";

const route = express.Router();

route.post("/", taskControllers.createTask);
route.put("/:taskId", taskControllers.updateTask);
route.delete("/:taskId", taskControllers.deleteTask);
route.get("/", taskControllers.getTasks);

export default route;
