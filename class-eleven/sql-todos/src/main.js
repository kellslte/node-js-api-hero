import { server } from "./app.setup.js";
import { config } from "./common/config.common.js";
import { connectToDatabase } from "./common/db.common.js";
import "./common/associations.js";

(async () => {
  try {
    const port = parseInt(config.getOrThrow("PORT"));
    await connectToDatabase();
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
