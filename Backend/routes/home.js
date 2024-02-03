const express = require('express')
const  router = express.Router()

// Require controller modules.
router.get("/", (req, res)=>{
    res.send("Welcome to Edustream - Management .")
})

module.exports = router