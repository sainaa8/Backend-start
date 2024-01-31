import fs from "fs";
const userDB =
  "/Users/23LP8204/Desktop/localday/Backend-start/models/post.json";

export const PostRequest = async (req, res) => {
  const { password, email: paramMail } = req.body;
  try {
    const userFile = await fs.readFileSync(userDB, "utf-8");
    const users = JSON.parse(userFile);

    const user = users.find((user) => user.email === paramMail);

    return user;
  } catch (err) {
    throw new Error(err.messege);
  }
};
