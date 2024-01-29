import { getUserByEmail } from "../queries/user/getUser.js";

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(JSON.stringify(user));
    // res.send(await getUserByEmail());
  } catch (error) {
    res.status(500).send(error.messege);
  }
};
