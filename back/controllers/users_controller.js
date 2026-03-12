import "dotenv/config";
import {
  createUser_model,
  findUserByEmail_model,
} from "../models/users_models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";

export const registerUser_controller = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existing = await findUserByEmail_model(email);

    //email used ?
    if (existing) {
      return res.status(409).json({ message: "email utilisé" });
    }

    //crypt pwd
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    //push user w crypted pwd
    await createUser_model(username, email, passwordHash);

    return res.status(201).json({ message: "Compte créer avec succès" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "erreur serveur", error: error.message });
  }
};

export const login_controller = async (req, res) => {
  try {
    const { email, password } = req.body;

    const COOKIE_OPTS = {
      httpOnly: true,
      sameSite: "lax",
      // secure: false,
      secure: "production",
      // secure: process.env.NODE_ENV,
      maxAge: 3600000,
    };

    const user = await findUserByEmail_model(email);
    //user exist ?
    if (!user) {
      return res.status(400).json({ message: "email ou mdp invalide" });
    }
    // pwd ok ?
    const valid = await bcrypt.compare(password, user.pwd, (err, results) => {
      if (!results) {
        return res.status(400).json({ message: "email ou mdp invalides" });
      }
      // create token on login
      const key = process.env.SECRET_KEY;
      const token = jwt.sign({ name: user.username, id: user.id }, key, {
        expiresIn: "1h",
      });

      // send in cookie
      res.cookie("token", token, COOKIE_OPTS);

      return res.status(200).json({
        ok: true,
        path: "/",
        user_id: user.id,
        username: user.username,
        message: "Connexion validée",
      });
    });
  } catch (error) {
    return res.status(500).json({ error: error, request: req.body });
  }
};

export const logout_controller = (req, res) => {
  return res.status(200).clearCookie("token").json({ message: "ok" });
};
