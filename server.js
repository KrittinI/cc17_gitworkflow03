const express = require("express");

const app = express();

const PORT = 8000;

app.use("/verify", (req, res) => {
  res.status(200).json({ msg: "verified already" });
});

app.use("/sendFile", (req, res) => {
  res.json({ msg: "file received" });
});

app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
});
