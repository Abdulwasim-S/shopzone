import express from "express";
import { CartModel, UserModel } from "../Helper/mongoose_scheme";

const router = express.Router();

//Get user cart items
router.post("/get", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(403).json({ message: "no user found" });
    }
    const items = await CartModel.find();
    res.status(200).json({ message: "cart items", items });
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
});
export const CartPage = router;
