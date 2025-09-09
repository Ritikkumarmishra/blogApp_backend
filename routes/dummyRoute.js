const express = require("express");

const router=express.Router();

// import controller 
const {dummyLink}=require("../controllers/dummyController");

// Mapping Create
router.get("/dummyroute",dummyLink);

// export
module.exports = router;