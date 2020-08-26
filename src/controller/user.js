import { v4 as uuid } from "uuid";
import { User } from "../db";
import { JWT, Encrypt } from "../helpers";
import { ErrorResponse } from "../custom";

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

 static async signIn(req, res) {
  try {
   // Find user using their email
   const user = await User.findByEmail(req.body.email);

   // Respond with a 404 if no user with email is found
   if (!user)
    throw new ErrorResponse(404, `User with email ${req.body.email} not found.`);

   // Respond with a 400 if password is incorrect
   if (!Encrypt.compare(req.body.password, user.password))
    throw new ErrorResponse(400, "Password is incorrect.");

   // API Response
   const response = {
    email: user.email,
    id: user._id,
    fullName: `${user.firstName} ${user.lastName}`,
    role: user.userType,
    token: JWT.sign({
     ...user,
     sessionId: uuid()
    })
   };

   // Send response
   res.status(200).json({
    statusCode: 200,
    response: {
     ...response,
     message: "Successfully signed user in."
    }
   });
  } catch (error) {
   res.status(error.c || 500).json({
    statusCode: error.c || 500,
    response: error.message
   });
  }
 }

 static async getUserWithSession(req, res) {
  try {
   // Get payload from modified request
   const { payload } = req;

   // Send response
   res.status(200).json({
    statusCode: 200,
    response: {
     ...payload
    }
   });
  } catch (error) {
   res.status(500).json({
    statusCode: 500,
    response: error.message
   });
  }
 }
}
