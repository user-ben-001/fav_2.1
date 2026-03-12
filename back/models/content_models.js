import db from "../config/db.js";

// gestion favoris
export const getFav_model = async (dossier_id) => {
  const [result] = await db.query(
    "SELECT * FROM favoris WHERE dossier_id = ?",
    [dossier_id],
  );
  return result;
};

export const createFav_model = async (nom_lien, url, dossier_id) => {
  const result = await db.query(
    "INSERT INTO favoris (nom_lien, url, dossier_id) VALUES (?,?,?)",
    [nom_lien, url, dossier_id],
  );
  return result.insertId;
};

// gestion events
export const getEvent_model = async (dossier_id) => {
  const [result] = await db.query(
    "SELECT * FROM evenements WHERE dossier_id = ?",
    [dossier_id],
  );
  return result;
};

// gestion notes
export const getNote_model = async (dossier_id) => {
  const [result] = await db.query("SELECT * FROM notes WHERE dossier_id = ?", [
    dossier_id,
  ]);
  return result;
};

// gestion tasks
export const getTask_model = async (dossier_id) => {
  const [result] = await db.query("SELECT * FROM to_do WHERE dossier_id = ?", [
    dossier_id,
  ]);
  return result;
};
