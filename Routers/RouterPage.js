import express from "express";
import { ProductModel } from "../Helper/mongoose_scheme.js";

const router = express.Router();
router.get("/", () => {
  res.send({ message: "working" });
});
router.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({ message: "products", products });
  } catch (error) {
    console.log(error);
  }
});

export const RouterPage = router;
