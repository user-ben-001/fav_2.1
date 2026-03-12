import "dotenv/config";
import {
  getDirFav_model,
  getDirNotes_model,
  getDirEvent_model,
  getDirTask_model,
  createDir_model,
  deleteDir_model,
} from "../models/dossiers_models.js";

// gestion dirFav
export const getDirFav_controller = async (req, res) => {
  try {
    const user_id = req.params.id;
    const directories = await getDirFav_model(user_id);

    return res.status(200).json({ directories });
  } catch (error) {
    return res.status(500).json({ err: error, message: error.message });
  }
};

// gestion dirNotes
export const getDirNotes_controller = async (req, res) => {
  try {
    const user_id = req.params.id;
    const directories = await getDirNotes_model(user_id);

    return res.status(200).json({ directories });
  } catch (error) {
    return res.status(500).json({ err: error, message: error.message });
  }
};

// gestion dirEvent
export const getDirEvent_controller = async (req, res) => {
  try {
    const user_id = req.params.id;
    const directories = await getDirEvent_model(user_id);

    return res.status(200).json({ directories });
  } catch (error) {
    return res.status(500).json({ err: error, message: error.message });
  }
};

// gestion dirTask
export const getDirTask_controller = async (req, res) => {
  try {
    const user_id = req.params.id;
    const directories = await getDirTask_model(user_id);

    return res.status(200).json({ directories });
  } catch (error) {
    return res.status(500).json({ err: error, message: error.message });
  }
};

// General Dir
export const createDir_controller = async (req, res) => {
  try {
    const { user_id, nom_dossier, code_dossier } = req.body;

    if (!user_id || !nom_dossier) {
      return res
        .status(400)
        .json({ message: "Tous les champs doivent être remplis" });
    }

    await createDir_model(user_id, nom_dossier, code_dossier);

    return res
      .status(200)
      .json({ message: "Dossier créé", response: response });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDir_controller = async (req, res) => {
  try {
    const id = req.params.id;

    await deleteDir_model(id);

    return res.status(200).json({ message: "Dossier supprimé" });
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};
