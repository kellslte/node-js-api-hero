import { User } from "../user/user.model.js";
import { Thread } from "../thread/thread.model.js";
import { Post } from "./post.model.js";

export const getPosts = async (threadId) => {
  return await Post.findAll({
    where: threadId ? { threadId } : undefined,
    include: [
      { model: User, as: "author" },
      { model: Thread, as: "thread" },
    ],
  });
};

export const getPostById = async (id) => {
  return await Post.findByPk(id, { include: ["author", "thread"] });
};

export const createPost = async (post) => {
  const newPost = await Post.create(post);
  return newPost;
};

export const updatePost = async (id, post) => {
  const [updated] = await Post.update(post, { where: { id } });
  return updated;
};

export const deletePost = async (id) => {
  await Post.destroy({ where: { id } });
  return true;
}; 