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
  const [updated] = await Thread.update(thread, { where: { id } });
  return updated;
};

export const deleteThread = async (id) => {
  await Thread.destroy({ where: { id } });
  return true;
}; 