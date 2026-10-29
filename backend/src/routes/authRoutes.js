const express = require("express");

const {
  register,
  login,
  deleteAccount,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const {
  handleValidationErrors,
  registerValidation,
  loginValidation,
} = require("../middleware/validationMiddleware");

const router = express.Router();

router.post(
  "/register",
  registerValidation,
  handleValidationErrors,
  register
);

router.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  login
);

// Delete the currently authenticated customer's account.
router.delete("/account", protect, deleteAccount);

module.exports = router;