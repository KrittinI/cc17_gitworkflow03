const express = require("express");

const app = express();

const PORT = 8000;

app.use("/verify", (req, res) => {
  res.status(200).json({ msg: "verified already" });
});

app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
});
