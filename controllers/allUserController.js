import { getAllUser } from "../queries/user/getAllUser.js";
import { createNewSda } from "../queries/user/createNewuser.js";
import { deleteThatSda } from "../queries/user/deleteUser.js";
export const getAllUsers = async (req, res) => {
  try {
    const user = await getAllUser(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.messege);
  }
};

export const createNesUser = async (req, res) => {
  try {
    const userCreated = await createNewSda(req);
    res.send(JSON.stringify(userCreated));
  } catch (err) {
    res.status(500).send(err.messege);
  }
};

export const deletedInCon = async (req, res) => {
  try {
    const userDeleted = await deleteThatSda(req);
    res.send(JSON.stringify(userDeleted));
  } catch (err) {
    res.status(500).send(err.messege);
  }
};