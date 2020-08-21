import express from "express";
import debug from "debug";
import config from "./config";

const app = express();
const port = parseInt(process.env.PORT || "3000");

app = config(app);

// app.get('/', (req, res) => {
//     res.send('Welcome to Agro-Mart!')
// })

app.listen(port, () => {
 debug(`Server running on port ${port}`);
});

export default app;
