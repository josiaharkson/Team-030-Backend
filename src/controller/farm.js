import { Farm } from "../db";

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
}
