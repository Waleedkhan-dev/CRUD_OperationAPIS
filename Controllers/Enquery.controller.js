import { Enquery } from "../models/enquery.model.js";

const inerstEnquery = async (req, res) => {
 // const EnqueryId = req.params.id
 const { name, email, phone, message } = req.body
 const addEnquery = new Enquery({
  name: name,
  email: email,
  phone: phone,
  message: message
 })
 await addEnquery.save().then(() => {
  res.status(200).json({ status: 1, message: "Data is save Accoratly" })
 }).catch((error) => {
  res.status(400).json({ status: 0, message: "failed to add the data", ero: error })
 })
}

const getEnquery = async (req, res) => {
 const dataEnquery = await Enquery.find()
 res.status(200).json({ status: 1, message: "hello this all data ", EnqueryList: dataEnquery })
}
const UpadetEnquery = async (req, res) => {
 const upadateId = req.params.id
 console.log(upadateId);

 const { name, email, phone, message } = req.body
 const NewObj = {
  name,
  email,
  phone,
  message
 }
 const UpdateRes = await Enquery.updateOne({ _id: upadateId }, NewObj)
 res.status(200).json({ status: 1, message: "Data is upoadte successfuly", newRes: UpdateRes })
}
const getSingleItem = async (req, res) => {
 const singleId = req.params.id
 const getSingleData = await Enquery.findOne({ _id: singleId })
 res.status(200).json({ status: 1, message: "single person data get successfulyy", id: singleId, res: getSingleData })
}
const deletEnquery = async (req, res) => {
 const QueryId = req.params.id
 const DeleteQuery = await Enquery.deleteOne({ _id: QueryId })
 res.status(200).json({ status: 1, message: "enqury Delet Succesfuly", id: QueryId, delREs: DeleteQuery })
}
export { inerstEnquery, getEnquery, UpadetEnquery, deletEnquery, getSingleItem }