import jwt from "jsonwebtoken";
import { Environment } from "../env";

export class JWT {
 static sign(payload) {
  return jwt.sign({ ...payload }, Environment.JWT_SECRET);
 }

 static decode(token) {
  return jwt.decode(token);
 }
}
