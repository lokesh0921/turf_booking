// db.js
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "lokesh", // or 'root' if you're using root
  password: "mypassword123", // replace with your actual password
  database: "turf_booking",
});

module.exports = pool;

// const connectionConfig = {
//     host: "localhost", // ✅ Wrap in quotes
//     user: "lokesh", // ✅ Wrap in quotes
//     password: "mypassword123", // ✅ Wrap in quotes
//     database: "my_project_db", // ✅ Wrap in quotes
//   };
