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

// const getEnquery = async (req, res) => {

//  try {
//   const page = parseInt(req.query.page) || 1
//   const limit = parseInt(req.query.limit) || 6
//   const skip = (page - 1) * limit
//   const dataEnquery = await Enquery.find().skip(skip).limit(limit)
//   const total = await Enquery.countDocuments();

//   res.status(200).json({
//    status: 1,
//    message: "Data fetch successfully",
//    totalpages: Math.ceil(total / limit),
//    currentpages: page,
//    totalItems: total,
//    EnquerList: dataEnquery

//   })
//  } catch (error) {
//   res.status(500).json({ status: 0, message: "internal server error" })
//  }




// }
const getEnquery = async (req, res) => {
 try {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;
  const skip = (page - 1) * limit;

  // Get paginated data
  const dataEnquery = await Enquery.find().skip(skip).limit(limit);

  // Get total count of documents
  const total = await Enquery.countDocuments();

  res.status(200).json({
   status: 1,
   message: "Paginated Enquery List",
   totalPages: Math.ceil(total / limit),
   currentPage: page,
   totalItems: total,
   EnqueryList: dataEnquery
  });
 } catch (error) {
  res.status(500).json({ status: 0, message: "Server Error", error });
 }
};



const UpadetEnquery = async (req, res) => {
 const upadateId = req.params.id
 // console.log(upadateId);

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
const DeletAllEnquery = async (req, res) => {
 const getAll = await Enquery.deleteMany({})
 res.status(200).json({ status: 1, message: "All Enquery Delete Successfully", getAll })
}
export { inerstEnquery, getEnquery, UpadetEnquery, deletEnquery, getSingleItem, DeletAllEnquery }