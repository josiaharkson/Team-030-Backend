import dotenv from "dotenv";

dotenv.config()

export class Environment {
 static JWT_SECRET = process.env.JWT_SECRET;
 static DB = {
  development: process.env.MONGO_URI,
  production: process.env.ORMONGO_URL, // The Heroku ObjectRocket's MongoDB add-on provisions this variable at runtime
  test: process.env.MONGO_TEST_URI
 };
}
