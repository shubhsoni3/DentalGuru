const express = require("express");
const db = require("../connect.js");

const router = express.Router()
const {
  bookDemo,
  getbookDemo,
  contact,
} = require("../controllers/authController");

// router.get("/dev", (req,res)=>{
//   res.send("hello Dev");
// });

router.post("/book_demo", bookDemo);
router.get("/getbookDemo", getbookDemo);
router.post("/contact", contact);
// router.get()
module.exports = router;





