const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");
router
  .route("/")
  .post([authenticateUser, authorizePermissions("admin")], createProduct)
  .get(getAllProducts);
router
  .route("/uploadImage")
  .post([authenticateUser, authorizePermissions("admin")], uploadImage);
router
  .route("/:id")
  .get(getSingleProduct)
  .delete([authenticateUser, authorizePermissions("admin")], deleteProduct)
  .patch([authenticateUser, authorizePermissions("admin")], updateProduct);
module.exports = router;
