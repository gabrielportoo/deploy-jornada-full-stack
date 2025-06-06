// API significa Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD - Create Read Update Delete
// Endpoint
// Middleware

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());
// app.use(express.json());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.use((request, response, next) => {
  if (request.method === "GET" && !request.url.startsWith("/api")) {
    response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
  } else {
    next();
  }
});

// app.get("*", async (request, response) => {
//   response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
