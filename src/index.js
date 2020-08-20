import express from "express";
import debug from "debug";
import config from "./config";

let app = express();
const port = parseInt(process.env.PORT || "3000", 10);

app = config(app);

app.get('/', (req, res) => {
    res.send('Welcome to Agro-Mart!')
})

app.listen(port, () => {
    debug(`Server running on port ${port}`);
    console.log(`Server running on port ${port}`);
});

export default app;
