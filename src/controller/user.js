import { v4 as uuid } from "uuid";
import { User } from "../db";
import { JWT } from "../helpers";

export class UserController {
 static async register(req, res) {
  try {
   // Create new user using request body
   const user = await User.create(req.body);

   // API response
   const response = {
    email: user.email,
    fullName: `${user.firstName} ${user.lastName}`,
    id: user._id,
    token: JWT.sign({
     ...user,
     sessionId: uuid()
    })
   };

   // Send response
   res.status(201).json({
    statusCode: 201,
    response
   });
  } catch (error) {
   res.status(500).json({
    statusCode: 500,
    response: error.message
   });
  }
 }
}
