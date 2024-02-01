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
import express from "express";
import fs from "fs";
import cors from "cors";
import useRouter from "/Users/23LP8204/Desktop/Node/routes/userRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;
app.use(useRouter);

//
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//usernmae lastname ali neg ni naihgui bvl error(400) bad request butsaa
// const readFile = async () => {
//   try {
//     const filePath = await fs.readFileSync(
//       "/Users/23LP8204/Desktop/localday/Backend-start/user.json",
//       "utf8"
//     );
//     return filePath;
//   } catch (err) {
//     return null;
//   }
// };
// app.post("/", async (req, res) => {
//   const { username, lastname, email } = req.body;

//   if (!username || !lastname || !email) {
//     res.end("username, lastname or email is missing");
//   }

//   try {
//     const isFileExisted = await readFile();

//     if (!isFileExisted) {
//       fs.writeFileSync(
//         "/Users/23LP8204/Desktop/localday/Backend-start/user.json",
//         JSON.stringify({ users: [] })
//       );
//     }

//     const newUserFile = await readFile();
//     const oldUsers = JSON.parse(newUserFile);
//     oldUsers.users.push({ username, lastname, email });
//     await fs.writeFileSync(
//       "/Users/23LP8204/Desktop/localday/Backend-start/user.json",
//       JSON.stringify(oldUsers)
//     );
//     res.send("User created successfully ");
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// app.get("/", async (req, res) => {
//   try {
//     await access(filePath);
//     res.status(200);

//     res.sendFile(filePath);
//   } catch (err) {
//     res.status(404).send("File not found");
//   }
// });

// app.delete("/", async (req, res) => {
//   try {
//     res.status(200);
//     await unlink("//Users/23LP8204/Desktop/localday/Backend-start/user.json");
//     res.send("success");
//   } catch (err) {
//     res.status(404).send("alrady deleted");
//   }
// });

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });

// ///
