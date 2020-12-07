const express = require("express");
const axios = require("axios");
const qs = require("querystring");

const router = express.Router();

router.get("/", (req, res) => {
  const oauthEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";
  const params = {
    client_id: process.env.GOOGLE_PHOTOS_CLIENT_ID,
    redirect_uri: "http://localhost:5000/auth/callback",
    scope: "https://www.googleapis.com/auth/photoslibrary.readonly",
    state: "pass-through value",
    include_granted_scopes: "true",
    response_type: "code",
  };
  const url = `${oauthEndpoint}?${qs.stringify(params)}`;
  res.redirect(url);
});

router.get("/callback", (req, res) => {
  if (req.query.error) {
    res.json(req.query.error);
  } else {
    const params = {
      code: req.query.code,
      client_id: process.env.GOOGLE_PHOTOS_CLIENT_ID,
      client_secret: process.env.GOOGLE_PHOTOS_CLIENT_SECRET,
      redirect_uri: "http://localhost:5000/auth/callback",
      grant_type: "authorization_code",
    };
    axios
      .post("https://oauth2.googleapis.com/token", qs.stringify(params), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((r) => {
        res.redirect("/images");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
