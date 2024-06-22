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
        offercount,
      });
      const saveProduct = await product.save();

      res.status(200).json(saveProduct);
    } catch (exception) {
      console.log(exception.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//API 3: "api/product/updateproduct/:id" - Put update product = Login required
router.put(
  "/updateproduct/:id",
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

      const newProduct = {};

      if (title) {
        newProduct.title = title;
      }
      if (description) {
        newProduct.description = description;
      }
      if (price) {
        newProduct.price = price;
      }
      if (buycount) {
        newProduct.buycount = buycount;
      }
      if (offercount) {
        newProduct.offercount = offercount;
      }

      //Find the product to be updated by product id, not by user id
      let product = await productModel.findById(req.params.id);

      if (!product) {
        return res.status(404).send("Not Found");
      }

      if (product.user.toString() !== req.user.id) {
        return res.status(401).send("Unauthorized access, not allowed.");
      }
      console.log(req.params.id);
      product = await productModel.findByIdAndUpdate(
        req.params.id,
        { $set: newProduct },
        { new: true }
      );
      res.json({ product });
    } catch (exception) {
      console.log(exception.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//API 4: "api/product/deleteproduct/:id" - Delete delete product = Login required
router.delete("/deleteproduct/:id", fetchUserId, async (req, res) => {
  //validation : 400 - Bad Request
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }

  try {
    //Find the product to be delete by product id, not by user id
    let product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).send("Not Found");
    }

    if (product.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized access, not allowed.");
    }
    console.log(req.params.id);
    product = await productModel.findByIdAndDelete(req.params.id);
    res.json({
        title: product.title,
        "Success": "Product Deleted successfully." 
    });
  } catch (exception) {
    console.log(exception.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
