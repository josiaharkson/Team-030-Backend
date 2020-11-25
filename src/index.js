import express from "express";
import path from "path";
import mongoose from "mongoose";
import debug from "debug";
import chalk from "chalk";
import config from "./config";
import { Environment } from "./env";

let app = express();
const port = parseInt(process.env.PORT || "3000");
const log = debug("worker");

app = config(app);

app.use(express.static("client/build"));
app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, async () => {
  log(chalk.green(`Server running on port ${port}`));

  try {
    // Connect to MongoDB
    const m = await mongoose.connect(Environment.DB[process.env.NODE_ENV], {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    if (m) log(chalk.yellow("Connected to MongoDB"));
  } catch (err) {
    log(chalk.redBright("Error connecting to db"));
    log(err);
  }
});

export default app;
