import { Express } from "express";
import fs from "fs";
const app = express();

app.use(express.json());
const port = 8000;
const filefath = "/Users/23LP8204/Desktop/Node/note.json";
app.get("/", (req, res) => {
  res.send("uustsen ");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
