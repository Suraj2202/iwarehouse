var jwt = require("jsonwebtoken");

const JWT_SECRET = "iwarehouse@admin";

const fetchUserId = (req, res, next) => {
  //Get the user from the jwt token and add it to 'id' in req object

  //when no token in header
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send("Please login again, login session expire.");
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (ex) {
    console.log(ex.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = fetchUserId;
