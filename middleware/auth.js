import fs from "fs";
const userDB =
  "/Users/23LP8204/Desktop/localday/Backend-start/models/post.json";
export const MiddlewareOfLogin = async (req, res, next) => {
  const { password, email: paramMail } = req.body;
  try {
    const userFile = await fs.readFileSync(userDB, "utf-8");
    const users = JSON.parse(userFile);

    const user = users.find((user) => user.email === paramMail);

    if (!user) {
      res.status(400).send("email or pass is not wrong");
      return;
    }

    if (user.password === password) {
      next();
      return;
    } else {
      res.status(400).send("email or pass is wrong");
    }
  } catch (err) {
    res.status(400).send(err.messege);
  }
};
