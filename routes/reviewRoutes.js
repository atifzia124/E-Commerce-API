const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authentication");
const {
  createReview,
  getAllReviews,
  getSingleReview,
  deleteReview,
  updateReview,
  getSingleProductReviews,
} = require("../controllers/reviewController");

router.route("/").get(getAllReviews).post(authenticateUser, createReview);
router
  .route("/:id")
  .get(getSingleReview)
  .patch(authenticateUser, updateReview)
  .delete(authenticateUser, deleteReview);
router.route("/:id/reviews").get(getSingleProductReviews);
module.exports = router;
