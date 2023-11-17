import mongoose from "mongoose";

const adminSchema = await mongoose.Schema({
  adminName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const userSchema = await mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
    default: [],
  },
});

const productSchema = await mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  specification: {
    type: String,
    required: true,
    default: "",
  },
  hash_tags: {
    type: String,
    required: true,
    default: "",
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "available",
  },
});

export const AdminModel = mongoose.model("admins", adminSchema);
export const UserModel = mongoose.model("users", userSchema);
export const ProductModel = mongoose.model("products", productSchema);
