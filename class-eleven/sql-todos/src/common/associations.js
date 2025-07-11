import { User } from "../user/user.model.js";
import { Todo } from "../todos/todo.model.js";

User.hasMany(Todo, { foreignKey: "userId", as: "todos" });
Todo.belongsTo(User, { foreignKey: "userId", as: "user" });
