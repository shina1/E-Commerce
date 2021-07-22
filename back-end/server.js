import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

const app = express();

connectDB();
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.status(200).json({
    status: "success",
    products,
  });
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

// const PORT = 5700;

// app.listen(PORT, console.log(`server running in  mode on port ${PORT}`));
const PORT = process.env.PORT || 5700;

app.listen(
  PORT,
  console.log(
    `server running in ${[process.env.NODE_ENV]} mode on port ${PORT}`.yellow
      .bold
  )
);
