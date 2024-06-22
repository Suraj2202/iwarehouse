const express = require("express");
const userModel = require("../models/users");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Create API user using POST "/api/auth". Doesn't require Login

router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 character").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    //validation : 400 - Bad Request
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    //Check user exists
try{
    let user = await userModel.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({
            error: "Email already occupied. Please enter unique email id."
        })
    }
    user = await userModel.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    res.status(200).json({
        message: `Account created successfully for ${req.body.name}`
    })
  }

catch(exception)
{
    console.log(exception.message)
    res.status(500).send("Unusual error occured")
}}
);

module.exports = router;
