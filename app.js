// const path = require("path");
const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// routes
const authRouter = require("./routes/authRouter");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(fileUpload());

require("dotenv").config({ path: ".env" });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/auth/", authRouter);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// connect to db
// const MONGOOSE_URI = `mongodb+srv://doadmin:3iC507O4kc8Yp92T@db-mongodb-sgp1-93307-d4541958.mongo.ondigitalocean.com/selfieStore?tls=true&authSource=admin&replicaSet=db-mongodb-sgp1-93307`;
const MONGOOSE_URI = process.env.MONGOOSE_URI;

mongoose
  .connect(MONGOOSE_URI)
  .then((result) => {
    app.listen(process.env.PORT || 5050);
  })
  .catch((err) => console.log(err));
