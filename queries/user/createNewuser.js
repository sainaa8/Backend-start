import fs from "fs";
import { makeHash } from "../../utils/password-hash.js";
const user = "/Users/23LP8204/Desktop/localday/Backend-start/models/users.json";
export const createNewSda = async (req, res) => {
  try {
    const { username, email, password: pass } = req.body;
    if (!username || !email) {
      return "email or name is missing";
      // console.log("dsadas");
    }

    const newUserFile = await fs.readFileSync(user, "utf-8");
    const oldUserFile = JSON.parse(newUserFile);

    if (oldUserFile.find((user) => user.email === email)) {
      return "User already exist";
    }
    const password = makeHash(pass);
    oldUserFile.push({
      username,
      email,
      password,
    });
    await fs.writeFileSync(user, JSON.stringify(oldUserFile));
    return oldUserFile;
    // res.send("asefasf");
    res.status(200).send("asdgasdgf");
  } catch (err) {
    throw new Error(err.messege);
  }
};
