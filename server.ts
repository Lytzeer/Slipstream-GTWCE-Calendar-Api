import express from "express";
import cors from "cors";
import { getRaces } from "./service.ts";

const app = express();
const port = Number(process.env.PORT) || 8080;

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN ?? "http://localhost:3000",
  methods: ["GET"],
}));

app.get("/api/races", (req, res) => {
  res.json(getRaces());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
