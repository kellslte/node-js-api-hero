import { User } from "../user/user.model.js";
import { Thread } from "../thread/thread.model.js";
import { Post } from "../post/post.model.js";

User.hasMany(Thread, { foreignKey: "userId", as: "threads" });
Thread.belongsTo(User, { foreignKey: "userId", as: "author" });

Thread.hasMany(Post, { foreignKey: "threadId", as: "posts" });
Post.belongsTo(Thread, { foreignKey: "threadId", as: "thread" });

User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "author" }); 