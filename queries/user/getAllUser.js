import { error } from "console";
import fs from "fs";

const allUser =
  "/Users/23LP8204/Desktop/localday/Backend-start/models/users.json";

export const getAllUser = async (req, res) => {
  try {
    const allUserJson = await fs.readFileSync(allUser, "utf-8");
    const allUserParse = JSON.parse(allUserJson);
    
    return allUserParse;
  } catch (error) {
    throw new Error(error.messege);
  }
};
