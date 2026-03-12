import {
  getDirFav_controller,
  getDirNotes_controller,
  getDirEvent_controller,
  getDirTask_controller,
  createDir_controller,
  deleteDir_controller,
} from "../controllers/dossiers_controller.js";
import express from "express";

const router = express.Router();

router.post("/", createDir_controller);
router.delete("/:id", deleteDir_controller);
router.get("/fav/:id", getDirFav_controller);
router.get("/notes/:id", getDirNotes_controller);
router.get("/event/:id", getDirEvent_controller);
router.get("/task/:id", getDirTask_controller);

export default router;
