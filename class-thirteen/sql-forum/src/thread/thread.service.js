import { User } from "../user/user.model.js";
import { Thread } from "./thread.model.js";

export const getThreads = async (userId) => {
  return await Thread.findAll({
    where: userId ? { userId } : undefined,
    include: {
      model: User,
      as: "author",
    },
  });
};

export const getThreadById = async (id) => {
  return await Thread.findByPk(id, { include: "author" });
};

export const createThread = async (thread) => {
  const newThread = await Thread.create(thread);
  return newThread;
};

export const updateThread = async (id, thread) => {
  const { userId, ...others } = thread;
  const [updated] = await Thread.update(others, { where: { id, userId } });
  return updated;
};

export const deleteThread = async (id, userId) => {
  await Thread.destroy({ where: { id, userId } });
  return true;
};
