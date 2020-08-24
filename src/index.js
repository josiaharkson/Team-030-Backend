const express = require("express");
const debug = require("debug");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const logger = require("morgan");
const  chalk = require("chalk");
const config = require("./config");
const  { Environment } = require("./env");


let app = express();
const port = parseInt(process.env.PORT || "3000", 10);

// app = config(app);

app.get("/", (req, res) => {
 res.send("Welcome to Agro-Mart!");
});

app.listen(port, async () => {
  console.log(chalk.green(`Server running on port ${port}`));
 
  try {
   // Connect to MongoDB
   const m = await mongoose.connect(Environment.DB[process.env.NODE_ENV], {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
   });
   if (m)
    console.log(chalk.yellow("Connected to MongoDB"));
  } catch (err) {
   console.log(chalk.redBright("Error connecting to db"));
  }
 });

const users = require("./routes/api/usersFarmer");
const profile = require("./routes/api/profileFarmer");
const posts = require("./routes/api/farmerPosts");


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
app.use("/api/profile", profile);
app.use("/api/posts", posts);



// app.listen(port, () => {
//     debug(`Server running on port ${port}`);
//     console.log(`Server running on port ${port}`);
// });

// export default app;
