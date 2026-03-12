import "dotenv/config";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false },
});

try {
  await db.getConnection();
  console.log("Connexion à la BDD réussie");
} catch (err) {
  console.error("Erreur de connexion à la bdd", err.message);
  process.exit(1);
}

export default db;
