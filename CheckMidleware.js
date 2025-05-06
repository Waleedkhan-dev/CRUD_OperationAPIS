

const checkToken = (req, res, next) => {
 if (req.query.token == "" || req.query.token == undefined) {
  res.send({
   status: 0,
   message: "Please inter the token"
  })
 }
 if (req.query.token != process.env.MyToken) {
  res.send({
   status: 0,
   message: "PLease inter the correct token"
  })
 }
 next()
}
export { checkToken }