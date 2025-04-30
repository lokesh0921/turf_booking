const express = require("express");
const app = express();
const port = 5005;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi from lokesh");
});

const router = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
