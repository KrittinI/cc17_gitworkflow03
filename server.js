const express = require("express");

const app = express();

const PORT = 8000;

app.use("/login", (req, res) => {
  res.json({ msg: "Login......" });
});

app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
});
