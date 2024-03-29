import express from "express";
import { OrderModel } from "../Helper/mongoose_scheme.js";

const router = express.Router();
//Products page check
router.get("/", (req, res) => {
  res.status(200).json({ message: "Order page working" });
});
//Add Product
router.post("/addProduct", async (req, res) => {
  try {
    const new_product = await ProductModel({
      product_name: req.body.product_name,
      image_url: req.body.image_url,
      price: req.body.price,
      description: req.body.description,
    }).save();
    res.status(200).json({ message: "Added Success", new_product });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Unable to Add", error });
  }
});

//Update Order code
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated_order = await OrderModel.updateOne(
      { _id: id },
      {
        order_status: req.body.order_status,
      }
    );
    const items = await OrderModel.find({ _id: id });
    res.status(200).json({ message: "Update Success", item: items[0] });
  } catch (error) {
    res.status(500).json({ message: "Unable to Update", error });
  }
});

export const OrdersPage = router;
