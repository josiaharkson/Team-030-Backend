import express from "express";
import debug from "debug";
import config from "./config";

let app = express();
const port = parseInt(process.env.PORT || "3000");
const log = debug("worker")

app = config(app);

// app.get('/', (req, res) => {
//     res.send('Welcome to Agro-Mart!')
// })

app.listen(port, () => {
 log(`Server running on port ${port}`);
});

export default app;
