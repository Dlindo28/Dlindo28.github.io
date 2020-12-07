require("dotenv").config({ path: `${__dirname}.env` });
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}.`)
);
