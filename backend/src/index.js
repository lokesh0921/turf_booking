const express = require("express");
const app = express();
const port = 5005;
const login = require("./routes/login");
const signup = require("./routes/signup");
const logout = require("./routes/logout");

app.use(express.json());

app.use("/api/v1/auth", login);
app.use("/api/v1/auth", signup);
app.use("/api/v1/auth", logout);

const router = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
