import {
  getFav_controller,
  createFav_controller,
  getEvent_controller,
  getNote_controller,
  getTask_controller,
} from "../controllers/content_controller.js";
import express from "express";

const router = express.Router();

router.get("/fav/:id", getFav_controller);
router.post("/fav", createFav_controller);

router.get("/event/:id", getEvent_controller);

router.get("/note/:id", getNote_controller);

router.get("/task/:id", getTask_controller);

export default router;
