import React, { useState, useEffect } from "react";
import Card from "./Card";
const mongoose = require("mongoose");

const Ep = require("../models/epRegister");

const Business = () => {
  let [epList, setEpList] = useState([]);

  // useEffect(() => {
  //   Ep.find({})
  //     .then((eps) => {
  //       setEpList(eps);
  //       console.log(eps); // Log the results to the console
  //     })
  //     .catch((err) => {
  //       console.log(err); // Log any errors to the console
  //     });
  // });

  return (
    <>
      <div class="card text-center">
        <h1 className="text-center">List Of Registered Businesses</h1>
        {epList.forEach((item) => {
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

export default Business;
