import { error } from "console";
import fs from "fs";
const user = "/Users/23LP8204/Desktop/localday/Backend-start/models/users.json";
export const updateUser = async (req, res) => {
  const { username } = req.body;
  const { email: paramEmail } = req.params;
  try {
    const updat = await fs.readFileSync(user, "utf-8");
    const useUpdateUser = JSON.parse(updat);
    const update = useUpdateUser.find(({email}) => email === paramEmail);
    console.log(update);
    if (update) {
      update.username = username;
    } else {
      return "user bkuuee";
    }
    // const lastMatch = JSON.stringify(update);
    fs.writeFileSync(user, JSON.stringify(useUpdateUser));
    return "succsessfully changed";
  } catch (err) {
    throw new Error(err.messege);
  }
};
