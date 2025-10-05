import express from "express";
import multer from "multer";
import {
  addProduct,
  productList,
  productById,
  changeStock,
} from "../controllers/productController.js";
import authSeller from "../middlewares/authSeller.js";

const upload = multer({ dest: "uploads/" }); // temporary folder for images
const router = express.Router();

router.post("/add", authSeller, upload.array("images"), addProduct);
router.get("/list", productList);
router.post("/id", productById);
router.post("/stock", authSeller, changeStock);

export default router;
