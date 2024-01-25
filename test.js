import { readFileSync } from "fs";
import { writeFile } from "node:fs/promises";

import http from "http";
// import mock from "./mock.json" assert { type: "json" };
import express from "express";
import dotenv from "dotenv";

const port = 4000;

const app = express();

app.use(express.json());

dotenv.config();

const filePath = "/Users/23LP5619/Desktop/backend/users.json";

app.get("/", async (req, res) => {
  try {
    access(filePath);
    res.sendFile(filePath);
    res.status(200).sendFile(filePath);
  } catch (err) {
    res.status(404).send("not found");
  }
});

app.delete("/", (req, res) => {
  if (!filePath) {
    res.send("file already deleted");
  } else {
    fs.unlinkSync(filePath);
    res.send("deleted");
  }
});

app.post("/signup", (req, res) => {
  try {
    const { username, lastname } = req.body;
    const users = JSON.parse(readFileSync(filePath, "utf-8"));

    if (!username || !lastname) {
      res.status(400).send({ msg: "Bad request." });
    } else if (users.hereglegch.find((el) => el.username === username)) {
      res.status(400).send({ msg: "user already existed" });
      return;
    } else {
      users.hereglegch.push({ username, lastname });

      writeFile(filePath, JSON.stringify(users));

      res.status(201).send("successfully created");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
