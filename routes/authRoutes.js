const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).json({
        status:"success",
        message: "API called",
        timestamp: new Date().toISOString()
    })
})

module.exports = router;