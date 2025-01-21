const express = require('express');
const router = express.Router();
const limiter = require('../middlewares/rateLimiter');

router.get('/',(req,res)=>{
    res.send("index working")
})

module.exports = router;