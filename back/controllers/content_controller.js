import {
  getFav_model,
  createFav_model,
  getEvent_model,
  getNote_model,
  getTask_model,
} from "../models/content_models.js";

// gestion Favoris
export const getFav_controller = async (req, res) => {
  try {
    const dossier_id = req.params.id;
    const directories = await getFav_model(dossier_id);

    return res.status(200).json({ directories });
  } catch (error) {
    return res.status(500).json({ err: error, message: error.message });
  }
};

export const createFav_controller = async (req, res) => {
  try {
    const { nom_lien, url, dossier_id } = req.body;
    if (!dossier_id) {
      return res.status(400).json({ message: "dossier non récupéré" });
    }
    await createFav_model(nom_lien, url, dossier_id );
    return res.status(200).json({ message: "favoris créé" });
  } catch (error) {}
};

// gestion events
export const getEvent_controller = async (req, res) => {
  try {
    const dossier_id = req.params.id;
    const directories = await getEvent_model(dossier_id);

    return res.status(200).json({ directories });
  } catch (error) {
    return res.status(500).json({ err: error, message: error.message });
  }
};

// gestion notes
export const getNote_controller = async (req, res) => {
  try {
    const dossier_id = req.params.id;
    const directories = await getNote_model(dossier_id);

    return res.status(200).json({ directories });
  } catch (error) {
    return res.status(500).json({ err: error, message: error.message });
  }
};

// gestion tasks
export const getTask_controller = async (req, res) => {
  try {
    const dossier_id = req.params.id;
    const directories = await getTask_model(dossier_id);

    return res.status(200).json({ directories });
  } catch (error) {
    return res.status(500).json({ err: error, message: error.message });
  }
};
