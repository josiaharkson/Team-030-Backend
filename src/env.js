const dotenv =  require("dotenv");

dotenv.config();

 class Environment {
 static JWT_SECRET = process.env.JWT_SECRET;

 static DB = {
  development: process.env.MONGO_URI,
  // eslint-disable-next-line max-len
  production: process.env.MONGO_URI, // The Heroku ObjectRocket's MongoDB add-on provide this variable at runtime
  test: process.env.MONGO_TEST_URI
 };
}
