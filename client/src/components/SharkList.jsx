// // import mongoose from "mongoose";
// const mongoose = require("mongoose");
// const Shark = require("../models/sharkRegister");

// mongoose
//   .connect("mongodb://localhost:27017/sharks", { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDB", err));

// let sharkList = [];

// Shark.find({})
//   .then((sharks) => {
//     sharkList = sharks;
//     console.log(sharks); // Log the results to the console
//   })
//   .catch((err) => {
//     console.log(err); // Log any errors to the console
//   });

// module.exports = sharkList;
