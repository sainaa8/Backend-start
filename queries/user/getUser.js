import fs from "fs";
const user = "/Users/23LP8204/Desktop/localday/Backend-start/models/users.json";

export const getUserByEmail = async (request, res) => {
  try {
    const { email: paramEmail } = request.params;
    const AllUsersJson = await fs.readFileSync(user, "utf-8");
    console.log(AllUsersJson);
    const AllUser = JSON.parse(AllUsersJson);
    console.log(AllUser);
    const exactUser = AllUser.find(({ email }) => email === paramEmail);
    return exactUser;
  } catch (error) {
    throw new Error(error.messege);
  }
};
