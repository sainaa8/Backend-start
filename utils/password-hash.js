import bcrypt from "bcrypt";

export const makeHash = (password) => {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
};

export const compareHash = (password, hash) => {
  const isItTrue = bcrypt.compareSync(password, hash);
  return isItTrue;
};
