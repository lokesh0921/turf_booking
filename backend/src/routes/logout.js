const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/logout", (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout route", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
