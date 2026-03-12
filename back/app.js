import "dotenv/config";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

import user_routeV100 from "./routes/users_routes.js";
import dossiers_routeV100 from "./routes/dossiers_routes.js";
import content_routeV100 from "./routes/content_routes.js";

import authToken from "./middlewares/authToken.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(import.meta.dirname, "./public")));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/users", user_routeV100);
app.use("/dir", authToken, dossiers_routeV100);
app.use("/content",authToken, content_routeV100);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
