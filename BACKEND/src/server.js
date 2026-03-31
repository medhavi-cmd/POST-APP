const app = require("./app");
const connectDb = require("./db/db");

async function startServer() {
    try {
        await connectDb();
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (err) {
        console.log("Failed to start server", err);
        process.exit(1);
    }
}

startServer();