import "dotenv/config";
import express from "express";
import jwt from "jsonwebtoken";

const app = express()

app.use(express.json());

export const auth_token = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader)
  const token = authHeader && authHeader.split(" ")[1];
  const secret_key = process.env.SECRET_KEY;

  jwt.verify(token, secret_key, (err, userPayload) => {
    if (err) {
      return res.status(403).json({ message: "jeton invalide ou expiré" });
    }
    req.user = userPayload;
    next();
  });
};
