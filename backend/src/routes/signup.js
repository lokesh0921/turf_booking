const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const pool = require("../lib/db"); // ✅ Fix this line
const generateToken = require("../lib/util");
// imort pool form dbconnection file
//

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  // console.log();
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters" });
    }

    // const connection = await initializeConnection();  // db func]

    const [existingUser] = await pool.query(
      // imort pool form dbconnection file
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      "INSERT INTO users (username, email, password) values (?, ?, ?)",
      [username, email, hashedPassword]
    );

    const newUserId = result.insertId;

    generateToken(newUserId, res);

    res.status(201).json({
      _id: newUserId,
      username,
      email,
    });
  } catch (error) {
    console.error("Error in signup route: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
