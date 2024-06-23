const express = require("express");
const userModel = require("../models/users");
const fetchUserId = require("../middleware/fetchUserId");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bycrpt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const JWT_SECRET = "iwarehouse@admin";

//API 1 : "/api/auth/createuser" - Create API user using POST "/api/auth/createuser". Doesn't require Login
router.post("/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    //validation : 400 - Bad Request
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({success: false, errors: result.array() });
    }

    //Check user exists
    try {
      let user = await userModel.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success: false,
          error: "Email already occupied. Please enter unique email id.",
        });
      }

      const salt = await bycrpt.genSalt(10);
      securePassword = await bycrpt.hash(req.body.password, salt);

      user = await userModel.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
      });

      //Create JWT token and send authToken to request.

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.status(200).json({success: true, authToken : authToken });
    } catch (exception) {
      console.log(exception.message);
      res.status(500).json({success : false, errormessage : "Internal Server Error"});
    }
  }
);

//API 2 : "/api/auth/login" - Authenticate a user using POST "/api/auth/login". To perform login & other operations.
router.post("/login",
  [
    body("password", "Password cannot be blank").exists(),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    //validation : 400 - Bad Request
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({success: false, errors: result.array() });
    }

    try {
      const { email, password } = req.body;

      //Check user exists
      let user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          error: "Invalid Email Credentials !!!",
        });
      }

      const comparePassword = await bycrpt.compare(password, user.password);
      if (!comparePassword) {
        return res.status(400).json({
          success: false,
          error: "Invalid Password Credentials !!!",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.status(200).json({success: true, authToken : authToken });
    } catch (exception) {
      console.log(exception.message);
      res.status(500).send({success: false, errormessage : "Internal Server Error"});
    }
  }
);

//API 3: "/api/auth/getuser" - Get User details based on JWT token
router.get("/getuser", 
  fetchUserId, 
  async (req, res) => {
  //validation : 400 - Bad Request
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({success: false, errors: result.array() });
  }

  try {
    const userId = req.user.id;
    console.log(req.user.id);
    const user = await userModel.findById(userId).select("-password");

    res.status(200).json({success: true, user : user});
  } catch (exception) {
    console.log(exception.message);
    res.status(500).json({success: false, errormessage : "Internal Server Error"});
  }
});

module.exports = router;
