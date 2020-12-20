require("dotenv").config({ path: `${__dirname}.env` });
const express = require("express");
const path = require("path");
const cors = require("cors");
const FormData = require("form-data");
const emailjs = require("emailjs-com");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

emailjs.init(process.env.EMAIL_USER_ID);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.post("/email", (req, res) => {
  emailjs
    .send(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, req.body)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return res.send("ok");
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}.`)
);
