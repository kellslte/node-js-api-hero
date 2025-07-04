import { server } from "./app.setup.js";

(async () => {
  try {
    server.listen(3000, () => {
      console.info(`Server is running on port ${3000}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
