const express = require('express');
const  mongoose  = require('mongoose');
const { Schema } = mongoose;
const userModel = require('../models/users');
const router = express.Router();

//Create API user using POST "/api/auth". Doesn't require auth

router.post('/', (req, res)=>{
    console.log(req.body);
    const user = userModel(req.body);
    user.save();
    res.send(req.body);
});

module.exports = router;