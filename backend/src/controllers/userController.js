import * as userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRETKEY;

export const signup = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    if (await userModel.getUser(email)) {
      console.log("error");
      return res.status(400).json({ message: "user already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.createUser(userName, email, hashedPassword);
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  console.log("here");
  const { email, password } = req.body;
  try {
    const user = await userModel.getUser(email);
    if (!user) {
      return res.status(401).json({ message: "user doesn't exist" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, email: user.email }, secretKey);
      res.cookie("access-token", token);
      res
        .status(200)
        .json({ token: token, message: "user logged in successfully" });
    } else {
      res.status(401).json({ message: "invalid password" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const logout = async (req, res) => {
  res.clearCookie("access-token");
  res.status(200).json({ message: "logged out successfully" });
};
