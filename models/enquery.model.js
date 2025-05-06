import mongoose from "mongoose";


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

export const Enquery = mongoose.model("Enquery", enquerySchema)