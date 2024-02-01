import fs from "fs";
import { makeHash } from "../../utils/password-hash.js";
const user = "/Users/23LP8204/Desktop/Node/models/users.json";
export const createNewSda = async (req, res) => {
  try {
    const { username, email, pass } = req.body;
    if (!username || !email || !pass) {
      return "email or name is missing";
      // console.log("dsadas");
    }

    const newUserFile = await fs.readFileSync(user, "utf-8");
    const oldUserFile = JSON.parse(newUserFile);

    const foundUser = oldUserFile.find((user) => user.email === email);

    if (foundUser) {
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
  } catch (err) {
    throw new Error(err.messege);
  }
};
