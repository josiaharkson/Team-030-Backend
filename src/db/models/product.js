import mongoose from "mongoose";

// Model for farm products farmer has for distribution
export class ProductModel {
 constructor() {
  this.define();
 }

 define() {
  this.model = mongoose.model("Product", new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   quantity: {
    type: Number,
    required: true,
    default: 0
   },
   farmId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farm",
    required: true
   },
   sold: {
    type: Number,
    default: 0
   }
  }));
 }

 create(body) {
  return Promise.resolve(
   this.model.create(body)
  );
 }

 findByFarmerId(farmId) {
  return Promise.resolve(
   this.model.find({ farmId })
  );
 }

 updateProduct(id, body) {
  return Promise.resolve(
   this.model.findByIdAndUpdate(id, body)
  );
 }

 deleteSingleRecord(_id) {
  return Promise.resolve(
   this.model.deleteOne({ _id })
  );
 }

 deleteAllRecords(farmId) {
  return Promise.resolve(
   this.model.deleteMany({ farmId })
  );
 }
}
