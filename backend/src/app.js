import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import taskRoute from "./routes/taskRoute.js";
import { authorizedUser } from "./middleWares/userAuthentication.js";

const app = express();

app.use(cors());
app.use(json());
app.use(cookieParser());

app.use("/auth", userRoute);
app.use("/tasks", authorizedUser, taskRoute);

app.listen(3000, () => {
  console.log("server running at port 3000");
});
