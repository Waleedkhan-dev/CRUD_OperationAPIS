import mongoose from "mongoose";
const dbConnection = async () => {
 try {
  const connect = await mongoose.connect(process.env.MONGODB_URL)
  console.log("Mongo DB connected Successfully");
 } catch (error) {
  console.log("mongo db failed");
 }
}
export { dbConnection }