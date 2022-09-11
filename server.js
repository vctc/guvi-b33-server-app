const express = require("express");
const cors = require("cors");

//dotenv
const dotenv = require("dotenv");
const { photos } = require("./data");
dotenv.config();

//express server
const app = express();
app.use(cors());
app.get("/api", (req, res) => {
  console.log("request", req);
  res.json("Hello server");
});

app.get("/api/photos", (req, res) => {
  //db
  //external service
  //data
  //   if(client is authenticated)
  //   if(client has authorization)
  //   get data from db/Service
  res.json(photos);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running in the port ${PORT}`);
});
