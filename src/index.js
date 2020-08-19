import express from "express";
import debug from "debug";
import config from "./config";

let app = express();
const port = parseInt(process.env.PORT || "3000");

app = config(app);

app.listen(port, () => {
 debug(`Server running on port ${port}`);
});

export default app;
