import { Farm } from "../db";
import { ErrorResponse } from "../custom";

export class FarmController {
 static async add(req, res) {
  try {
   // Retrieve payload and body from request
   const { payload, body } = req;

   // Modify the request body
   body.userId = payload._id;

   // Add farm to the db
   const farm = await Farm.create(body);

   // API response
   const response = {
    ...farm.toJSON()
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

 static async getFarmByAuthenticatedUser(req, res) {
  try {
   // Get all farms
   const farms = await Farm.findByUserId(req.payload._id);

   // Find a single farm using path parameter
   const farm = farms.find((f) => f._id === req.params.id);

   // Throw error if farm with specified id is not found
   if (!farm)
    throw new ErrorResponse(404, "Farm details not found");

   // API response
   const response = {
    ...farm.toJSON()
   };

   // Send response
   res.status(200).json({
    statusCode: 200,
    response
   });
  } catch (error) {
   res.status(error.c || 500).json({
    statusCode: error.c || 500,
    response: error.message
   });
  }
 }

 static async getAllFarmsByAuthenticatedUser(req, res) {
  try {
   // Get all farms using user id from decoded payload
   const farms = await Farm.findByUserId(req.payload._id);

   // API response
   const response = farms.map((f) => f.toJSON());

   // Send response
   res.status(200).json({
    statusCode: 200,
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
