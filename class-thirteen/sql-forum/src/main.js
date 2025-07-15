import { server } from "./app.setup.js";
import { config } from "./common/config.common.js";
import { connectToDatabase } from "./common/db.common.js";
import "./common/associations.js";

(async () => {
  await connectToDatabase();
  const port = config.getOrThrow("PORT") || 3000;
  server.listen(port, () => {
    console.log(`Forum app listening on port ${port}`);
  });
})(); 