// import fs from "fs";
// fs.writeFile("text.txt", "hello world fuckaa", (err) => {
//   if (err) throw new Error("Something is wrong");
//   else console.log("success");
// });
// import mock from "./moke.json" assert { type: "json" };
// import http from "http";
// const port = 4000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.write(JSON.stringify(mock));
//   res.end();
// });
// server.listen(port, () =>
//   console.log(`Server running at http://localhost:${port}`)
// );

//

// import { open } from "node:fs/promises";
// import express from "express";
// const app = express();
// const port = 8000;
// app.get("/", (req, res) => {
//   res.status(200);

//   res.send("Hello, your first express is working");
// });

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });

////////////////////////////////////////////////////////////////////////
import { unlink, access } from "node:fs/promises";
import express, { application } from "express";
import fs from "fs";
import { send } from "node:process";
import { writeFile } from "node:fs/promises";
import { writeFileSync } from "node:fs";

const app = express();
app.use(express.json());
const port = 8000;

const filePath = "/Users/23LP8204/Desktop/Node/user.json";
//usernmae lastname ali neg ni naihgui bvl error(400) bad request butsaa
app.post("/", async (req, res) => {
  try {
    const { username, lastname, email } = req.body;
    const result = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (!username || !lastname || !email) {
      res.status(400).send("bad request");
    } else if (result.users.find((el) => el.email === email)) {
      res.status(400).send("emaile dahin shalgana uu");
    } else {
      result.users.push({ username, lastname, email });
      writeFileSync(filePath, JSON.stringify(result));
      const lastResult = JSON.parse(fs.readFileSync(filePath));
      res.send(lastResult);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/", async (req, res) => {
  try {
    await access(filePath);
    res.status(200);
    res.set("Content-Type", "application/json");
    res.sendFile(filePath);
  } catch (err) {
    res.status(404).send("File not found");
  }
});

app.delete("/", async (req, res) => {
  try {
    res.status(200);
    await unlink("/Users/23LP8204/Desktop/Node/user.json");
    res.send("success");
  } catch (err) {
    res.status(404).send("alrady deleted");
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
