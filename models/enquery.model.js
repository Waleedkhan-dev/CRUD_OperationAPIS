import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const enquerySchema = mongoose.Schema({
 name: {
  type: String,
  require: true
 },
 email: {
  type: String,
  require: true,
  unique: true
 },
 phone: {
  type: String,
  require: true
 },
 message: {
  type: String,
  require: true
 }
}, { timeStaps: true })
enquerySchema.plugin(mongoosePaginate)
export const Enquery = mongoose.model("Enquery", enquerySchema)