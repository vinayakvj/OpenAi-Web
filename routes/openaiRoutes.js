const { json } = require("express");
const express = require("express");
const router = express.Router();

router.get("/generate", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

module.exports = router;
