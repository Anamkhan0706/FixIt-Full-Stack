const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Booking = require("../models/Booking");
const Review = require("../models/Review");
const Professional = require("../models/Professional");

// Register a new user
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
      });
    }

    // Only customer or professional roles can be selected at registration.
    const allowedRoles = ["customer", "professional"];
    const assignedRole = allowedRoles.includes(role)
      ? role
      : "customer";

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      role: assignedRole,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);

    return res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
};

// Login an existing user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

// Delete the authenticated customer's account
const deleteAccount = async (req, res) => {
  try {
    // Only customer accounts can use this endpoint.
    if (req.user.role !== "customer") {
      return res.status(403).json({
        success: false,
        message:
          "Only customer accounts can be deleted through this endpoint",
      });
    }

    // Identify the account using the verified JWT.
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Account not found",
      });
    }

    // Prevent deletion when booking history exists.
    const existingBooking = await Booking.exists({
      user: user._id,
    });

    if (existingBooking) {
      return res.status(409).json({
        success: false,
        message:
          "Account cannot be deleted while bookings exist. Resolve the booking records first.",
      });
    }

    // Prevent orphaned reviews.
    const existingReview = await Review.exists({
      customer: user._id,
    });

    if (existingReview) {
      return res.status(409).json({
        success: false,
        message:
          "Account cannot be deleted while reviews exist. Resolve the review records first.",
      });
    }

    // Protect accounts connected to professional profiles.
    const existingProfessional = await Professional.exists({
      user: user._id,
    });

    if (existingProfessional) {
      return res.status(409).json({
        success: false,
        message:
          "Account is linked to a professional profile and cannot be deleted through this endpoint.",
      });
    }

    // Delete only the authenticated user's account.
    await User.findByIdAndDelete(user._id);

    return res.status(200).json({
      success: true,
      message: "Customer account deleted successfully",
    });
  } catch (error) {
    console.error("Delete account error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete account",
    });
  }
};

module.exports = {
  register,
  login,
  deleteAccount,
};