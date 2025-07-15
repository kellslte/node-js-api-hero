import { User } from "./user.model.js";

export const createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

export const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

export const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

export const getUserByUsername = async (username) => {
  const user = await User.findOne({ where: { username } });
  return user;
};
