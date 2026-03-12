import jwt from "jsonwebtoken";
import "dotenv/config";

const authenticateToken = (req, res, next) => {
  const token = req.cookies?.token ?? " ";
  req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Accès refusé. Jeton manquant." });
  }

  const MY_SECRET = process.env.SECRET_KEY;
  req.user = jwt.verify(token, MY_SECRET, (err) => {
    if (err) {
      return res.status(403).json({ message: "Jeton invalide ou expiré." });
    }

    next();
  });
};

export default authenticateToken;
