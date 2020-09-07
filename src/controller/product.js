import { Product, ProductStat } from "../db";
import { ErrorResponse } from "../custom";

export class ProductController {
 static async addProduct(req, res) {
  try {
   // Get body and farm from request object
   const { body, farm } = req;

   // Create product
   const p = await Product.create({
    name: body.name,
    farmId: farm._id
   });

   // Create record
   const r = await ProductStat.addRecord({
    productId: p._id,
    quantity: body.quantity || 1,
    sold: body.sold || 0
   });

   // Get relationship
   const rPopulated = await r.execPopulate();

   // API response
   const response = {
    message: "Product added to farm.",
    productRecord: {
     ...rPopulated.toJSON()
    }
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
