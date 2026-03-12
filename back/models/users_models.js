import db from "../config/db.js";

export const createUser_model = async (username, email, password) => {
  const [result] = await db.query(
    "INSERT INTO userinfo (username, email, pwd) VALUES (?,?,?)",
    [username, email, password],
  );
  return result.insertId;
};

export const findUserByEmail_model = async (email) => {
    const [rows] = await db.query('SELECT * FROM userinfo WHERE email = ?', [email])
    return rows[0]
}