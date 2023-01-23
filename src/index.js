const express = require('express')
const app = express()
const mongoose = require("mongoose")
const appRouter = require("./router")
const cors = require("cors");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});


const PORT = process.env.PORT
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_HOST_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("bazaga ulandi");
  })
  .catch((err) => {
    console.log(err);
  });


app.use("/api", appRouter);

app.listen(PORT, () => {
    console.log("5000 port ishladi")
})