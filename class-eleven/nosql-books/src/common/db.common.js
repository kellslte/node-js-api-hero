import mongoose from "mongoose";
import { config } from "./config.common.js";

export const connectToDatabase = async () => {
  try {
    mongoose.connect(config.getOrThrow("MONGODB_URI"));
    mongoose.connection.once("open", () => {
      console.info("Connection to the database has been established");
    });
    mongoose.connection.on("error", (err) => {
      throw new Error(err.message);
    });
  } catch ( error )
  {
      console.error( error );
  }
};
