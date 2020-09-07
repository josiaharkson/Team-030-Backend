import { TokenExpiredError } from "jsonwebtoken";
import { Session, User } from "../db";
import { JWT, Keys } from "../helpers";
import { ErrorResponse } from "../custom";

export const hasToken = async (req, res, next) => {
 try {
  // Obtain authorization header from request
  const { authorization } = req.headers;

  // Throw error if authorization header is not present
  if (!authorization)
   throw new ErrorResponse(401, "Authorization header must be present to access this resource.");

  // Throw error if authorization header doesn't begin with 'Bearer' string
  if (!authorization.startsWith("Bearer"))
   throw new ErrorResponse(400, "Authorization header must begin with 'Bearer'");

  // Obtain token
  const token = authorization.substring(7, authorization.length);

  // Throw error if token is not present
  if (!token || token.trim().length === 0)
   throw new ErrorResponse(401, "Token not present in authorization header");

  // Variable to hold payload from token
  let payload = null;

  try {
   // Decode payload
   payload = JWT.decode(token);
  } catch (error) {
   if (error instanceof TokenExpiredError)
    throw new ErrorResponse(401, "Token has expired. Log in to sign another.");
   throw new ErrorResponse(401, error.message);
  }

  // Check if user has signed out of session
  if (await Session.isInvalid(payload.sessionId))
   throw new ErrorResponse(401, "Session invalidated by prior sign out. Sign in again");

  // Modify request to hold decoded payload
  req.payload = payload;

  // Pass control to next controller
  next();
 } catch (error) {
  res.status(error.c || 500).json({
   statusCode: error.c || 500,
   response: error.message
  });
 }
};

export const hasRole = (role) => {
 return (req, res, next) => {
  try {
   // Shortened roles with full names
   const roles = {
    ret: "Retailer",
    who: "Wholesaler",
    trans: "Transporter",
    cons: "Consumer",
    inv: "Investor",
    farm: "Farmer"
   };

   // Get payload from request
   const { payload } = req;

   // Check if 'userType' in payload matches role. Throw error if it doesn't
   if (payload.userType !== role)
    throw new ErrorResponse(400, `Only users with role "${roles[role]}" can access this resource`);

   next();
  } catch (error) {
   res.status(error.c || 500).json({
    statusCode: error.c || 500,
    response: error.message
   });
  }
 };
};

export const checkIfEmailInUse = async (req, res, next) => {
 try {
  // Find user by email
  const user = await User.findByEmail(req.body.email);

  // Check if user is already registered. Throw error in that case.
  if (user)
   throw new ErrorResponse(400, `User with email ${req.body.email} already registered`);
  next();
 } catch (error) {
  res.status(error.c || 500).json({
   statusCode: error.c || 500,
   response: error.message
  });
 }
};

export const checkIfkeysPresent = (keys) => {
 return (req, res, next) => {
  try {
   // Check if keys are present or null
   const present = Keys.arePresent(req.body, keys);

   // Throw error if not present
   if (!present)
    throw new ErrorResponse(400, "Required key (s) not present in request body");
   next();
  } catch (error) {
   res.status(error.c || 500).json({
    statusCode: error.c || 500,
    response: error.message
   });
  }
 };
};
