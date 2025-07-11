import { Sequelize } from "sequelize";
import { config } from "./config.common.js";

export const sequelize = new Sequelize(config.getOrThrow("PG_URI"));

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
