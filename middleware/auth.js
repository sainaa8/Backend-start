import fs from "fs";
import { compareHash } from "../utils/password-hash.js";
const userDB = "/Users/23LP8204/Desktop/Node/models/users.json";
export const MiddlewareOfLogin = async (req, res, next) => {
  const { pass, email: paramMail } = req.body;
  try {
    const userFile = await fs.readFileSync(userDB, "utf-8");
    const users = JSON.parse(userFile);
    
    const user = users.find((user) => user.email === paramMail);
    
    if (!user) {
      res.status(400).send("email or pass is  wrong");
    }

    const password = compareHash(pass, user.password);

    if (password) {
      req.userData = user;
      next();
      return;
    } else {
      res.status(400).send("email or pass is wrongg");
    }
  } catch (err) {
    res.status(400).send(err.messege);
  }
};
