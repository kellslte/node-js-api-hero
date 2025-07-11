import { User } from "../user/user.model.js";
import { Todo } from "./todo.model.js";

export const getTodos = async (userId) => {
  return await Todo.findAll({
    include: {
      model: User,
      where: {
        userId,
      },
    },
  });
};

export const getTodoById = async (id) => {
  return await Todo.findByPk(id, { include: "user" });
};

export const createTodo = async (todo) => {
  const newTodo = await Todo.create(todo);
  return newTodo;
};

export const updateTodo = async (id, todo) => {
  const updatedTodo = await Todo.update(todo, { where: { id } });

  return updatedTodo;
};

export const deleteTodo = async (id) => {
  await Todo.destroy({ where: { id } });
  return true;
};
