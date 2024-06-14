const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// initialize app
const app = express();

// env  variables
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

// app listening
app.listen(process.env.PORT, () => {
  console.log("Car API backend server Running on port: " + process.env.PORT);
});

const getCarInventoryWithFilters = async (req, res) => {
  try {
    const allInventoryCars = {}

    let obj = {
      data: allInventoryCars,
    };

    res.status(200).send(obj);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error in getting car inventory");
  }
};

app.get("/api/inventory", getCarInventoryWithFilters);