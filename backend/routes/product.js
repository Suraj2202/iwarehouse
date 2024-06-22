const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const productModel = require("../models/products");
const { body, validationResult } = require("express-validator");

//API 1 : "api/product/fetchallproducts" - Get all products = Login required
router.get("/fetchallproducts", fetchUserId, async (req, res) => {
  try {
    const products = await productModel.find({ user: req.user.id });
    res.json(products);
  } catch (ex) {
    console.log(ex.message);
    res.status(500).send("Internal Server Error");
  }
});

//API 2: "api/product/addproduct" - Post product = Login required
router.post(
  "/addproduct",
  fetchUserId,
  [
    body("title", "Title must be atleast 3 character").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 character").isLength({
      min: 5,
    }),
    body("price", "Price cannot be blank").exists(),
    body("buycount", "Buy Count cannot be blank").exists(),
    body("offercount", "Offer Count cannot be blank").exists(),
  ],
  async (req, res) => {
    //validation : 400 - Bad Request
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    try {
      const { title, description, price, buycount, offercount } = req.body;

      console.log(req.user.id);
      const product = new productModel({
        user: req.user.id,
        title,
        description,
        price,
        buycount,
        offercount
      });
      const saveProduct = await product.save();

      res.status(200).json(saveProduct);
      
    } catch (exception) {
      console.log(exception.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
