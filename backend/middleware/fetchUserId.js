var jwt = require("jsonwebtoken");

const JWT_SECRET = "iwarehouse@admin";

const fetchUserId = (req, res, next) => {
  //Get the user from the jwt token and add it to 'id' in req object

  //when no token in header
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).json({success: false, errormessage : "Please login again, token unavailable."});
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (ex) {
    console.log(ex.message);
    res.status(500).json({success: false, errormessage : "Please login again, token expire."});
  }
};

module.exports = fetchUserId;
