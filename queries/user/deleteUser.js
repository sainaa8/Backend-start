import fs from "fs";

const user = "/Users/23LP8204/Desktop/localday/Backend-start/models/users.json";

export const deleteThatSda = async (req, res) => {
  try {
    const { email: paramEmail } = req.body;
    const tempDelete = await fs.readFileSync(user);
    const deletedDevise = JSON.parse(tempDelete);
    const deleteCheck = deletedDevise.find((user) => user.email === paramEmail);
    if (!deleteCheck) {
      return "user not exist";
    }

    const deleteByFilter = deletedDevise.filter(
      ({ email }) => email !== paramEmail
    );
    fs.writeFileSync(user, JSON.stringify(deleteByFilter));
    return "deleted";
    // res.status(200).send("deleted");
  } catch (err) {
    throw new Error(err.messege);
  }
};
