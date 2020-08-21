import dotenv from 'dotenv';

dotenv.config();

export default class Environment {
 static JWT_SECRET = process.env.JWT_SECRET;

 static DB = {
   development: process.env.MONGO_URI,
   // eslint-disable-next-line max-len
   production: process.env.ORMONGO_URL, // The Heroku ObjectRocket's MongoDB add-on provide this variable at runtime
   test: process.env.MONGO_TEST_URI
 };
}
