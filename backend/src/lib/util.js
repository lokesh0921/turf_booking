// const jwt = require("jsonwebtoken");

// const generateToken = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });

//   res.cookie("jwt", token, {
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//     httpOnly: false,
//     // sameSite: "none",
//     secure: process.env.NODE_ENV !== "development",
//   });
// };

// module.exports = generateToken;

// imorted from todo yt prjec

const jwt = require("jsonwebtoken");

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, "turf_secret_123", {
    expiresIn: "7d",
  });

  // Send token as a cookie (optional, but more secure for auth)
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // true in production
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

module.exports = generateToken;
