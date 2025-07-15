import { DataTypes } from "sequelize";
import { sequelize } from "../common/db.common.js";

export const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    threadId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    timestamps: true,
  }
); 