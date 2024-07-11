import jwt from "jsonwebtoken";

const secretKey = process.env.SECRETKEY;

export const authorizedUser = (req, res, next) => {
  try {
    const token = req.cookies["access-token"];
    jwt.verify(token, secretKey, (err, data) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized user" });
      }
      req.user = {
        id: data.id,
        email: data.email,
      };
      next();
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
