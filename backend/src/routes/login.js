const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// imort pool form dbconnection file

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // const [existingUser] = await pool.query(
    //     "SELECT * FROM users WHERE email = ?",
    //     [email]
    //   );

    // imort pool form dbconnection file
    const [existingUser] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length === 0) {
      return res.status(400).json({ message: "User not found, invalid email" });
    }

    const user = existingUser[0];

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    generateToken(user.id, res); // or user.user_id depending on schema

    res.status(200).json({
      _id: user.id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in login route", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
