const express = require("express");
const axios = require("axios");

const router = express.Router();

// Return all images
router.get("/", (req, res) => {
  const token = req.query.access_token;
  if (token) {
    axios
      .get("https://photoslibrary.googleapis.com/v1/albums", {
        Authorization: `Bearer ${token}`,
      })
      .then((r) => res.send(r.data))
      .catch((err) => console.log(err));
  } else {
    res.json({
      error: "Access token not found",
    });
  }
});

module.exports = router;
