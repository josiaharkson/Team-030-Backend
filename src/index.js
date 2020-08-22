const express = require("express");
const debug = require("debug");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const logger = require("morgan");


let app = express();
const port = parseInt(process.env.PORT || "3000", 10);


const users = require("./routes/api/usersFarmer");
app.use(logger("dev"));

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// DB Config
const db = require("./config/keys").mongoURL;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));



// Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users", users);


app.listen(port, () => {
    debug(`Server running on port ${port}`);
    console.log(`Server running on port ${port}`);
});

