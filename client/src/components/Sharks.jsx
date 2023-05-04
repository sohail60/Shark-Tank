import React, { useState, useEffect } from "react";
import Card from "./Card";
const mongoose = require("mongoose");
const Shark = require("../models/sharkRegister.js");
// mongoose.connect("mongodb://localhost:27017/sharks");
// const sharkList = require("./SharkList");
// const Shark = require("../models/sharkRegister");

const Sharks = () => {
  let [sharkList, setSharkList] = useState([]);

  // useEffect(() => {

  // }, );

  return (
    <>
      <div className="sharksmaindiv">
        <h1 className="text-center">List Of Registered Sharks</h1>

        {sharkList.forEach((item) => {
          <Card
            name={item.name}
            mobileNumber={item.mobileNumber}
            email={item.email}
            profession={item.profession}
          />;
        })}
      </div>
    </>
  );
};

export default Sharks;
