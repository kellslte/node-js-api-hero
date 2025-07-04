import { server } from "./app.setup.js";

(async () => {
    try {
        server.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();