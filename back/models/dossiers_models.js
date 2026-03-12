import db from "../config/db.js";

// gestion dirFav
export const getDirFav_model = async (user_id) => {
  const [result] = await db.query(
    "SELECT * FROM dossiers WHERE user_id = ? AND code_dossier = 1",
    [user_id],
  );
  return result;
};

// gestion dirNotes
export const getDirNotes_model = async (user_id) => {
  const [result] = await db.query(
    "SELECT * FROM dossiers WHERE user_id = ? AND code_dossier = 2",
    [user_id],
  );
  return result;
};

// gestion dirEvent
export const getDirEvent_model = async (user_id) => {
  const [result] = await db.query(
    "SELECT * FROM dossiers WHERE user_id = ? AND code_dossier = 4",
    [user_id],
  );
  return result;
};

// gestion dirTask
export const getDirTask_model = async (user_id) => {
  const [result] = await db.query(
    "SELECT * FROM dossiers WHERE user_id = ? AND code_dossier = 3",
    [user_id],
  );
  return result;
};

// General dir

export const createDir_model = async (user_id, nom_dossier, code_dossier) => {
  const result = await db.query(
    "INSERT INTO dossiers (user_id, nom_dossier, code_dossier) VALUES (?,?,?)",
    [user_id, nom_dossier, code_dossier],
  );
  return result.insertId;
};

export const deleteDir_model = async (id) => {
  const result = await db.query("DELETE FROM dossiers WHERE id = ?", [id]);
  return result.status;
};
