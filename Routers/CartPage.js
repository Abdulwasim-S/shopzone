import express from "express";
import { CartModel, UserModel } from "../Helper/mongoose_scheme.js";

const router = express.Router();

//Check cart
router.get("/", (req, res) => {
  res.status(200).json({ message: "cart working" });
});
//Get user cart items
router.post("/", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.headers.email });
    if (!user) {
      return res.status(403).json({ message: "no user found" });
    }
    const items = await CartModel.find();
    res.status(200).json({ message: "cart items", items });
  } catch (error) {
    res.status(500).json({ error });
  }
});
//Add user cart items
router.post("/add-item", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.headers.email });
    if (!user) {
      return res.status(403).json({ message: "no user found" });
    }
    const newCartItem = await UserModel({
      email: req.headers.email,
      product_id: req.body._id,
    }).save();
    res.status(200).json({ message: "cart items", cartItems });
  } catch (error) {
    res.status(500).json({ error });
  }
});
//delete user cart items
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CartModel.deleteOne({
      _id: id,
    });
    res.status(200).json({ message: "Deleted Success", id });
  } catch (error) {
    res.status(500).json({ error });
  }
});
export const CartPage = router;
