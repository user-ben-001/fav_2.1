import express from "express";
import {
  registerUser_controller,
  login_controller,
  logout_controller,
} from "../controllers/users_controller.js";

const router = express.Router();

router.post("/register", registerUser_controller);
router.post("/login", login_controller);
router.post("/logout", logout_controller);

export default router;
