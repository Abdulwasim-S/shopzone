import express from "express";
import { ProductModel } from "../Helper/mongoose_scheme.js";

const router = express.Router();
//Products page check
router.get("/", (req, res) => {
  res.status(200).json({ message: "Admin page working" });
});
//Add Product
router.post("/addProduct", async (req, res) => {
  try {
    const new_product = await ProductModel({
      product_name: req.body.product_name,
      image_url: req.body.image_url,
      price: req.body.price,
      discription: req.body.discription,
      specification: req.body.specification,
      hash_tags: req.body.hash_tags,
      category: req.body.category,
    }).save();
    res.status(200).json({ message: "SignUp Success", new_product });
  } catch (error) {
    console.log(error);
  }
});
//Delete Product
router.delete("/delete:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.deleteOne({
      _id: id,
    });
    res.status(200).json({ message: "Deleted Success", id });
  } catch (error) {
    console.log(error);
  }
});
//Update Product
router.post("/addProduct", async (req, res) => {
  try {
    const new_product = await ProductModel({
      product_name: req.body.product_name,
      image_url: req.body.image_url,
      price: req.body.price,
      discription: req.body.discription,
      specification: req.body.specification,
      hash_tags: req.body.hash_tags,
      category: req.body.category,
    }).save();
    res.status(200).json({ message: "SignUp Success", new_product });
  } catch (error) {
    console.log(error);
  }
});

export const ProductsPage = router;
