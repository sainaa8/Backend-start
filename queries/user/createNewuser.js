import fs from "fs";
const user = "/Users/23LP8204/Desktop/localday/Backend-start/models/users.json";
export const createNewSda = async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      res.end("username or email is missing");
      console.log("dsadas");
    }
    const newUserFile = await fs.readFileSync(user, "utf-8");
    console.log(newUserFile);
    const oldUserFile = JSON.parse(newUserFile);
    if (oldUserFile.find((user) => user.email === email)) {
      throw new Error("User already exist");
    }
    oldUserFile.push({
      username,
      email,
    });
    await fs.writeFileSync(user, JSON.stringify(oldUserFile));
    return "success";
    // res.send("asefasf");
    res.status(200).send("asdgasdgf");
  } catch (err) {
    throw new Error(err.messege);
  }
};
