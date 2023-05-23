import React from "react";
import signupimg from "../images/signin.webp";
import Button from "@mui/material/Button";
import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Epregister.css";
import EpLogin from "./EpLogin";
// import "../EpRegScript.js"

const Epregister = () => {
  const navigate= useNavigate();
  const [epReg, setEpReg] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    profession: "",
    amount: "",
    equity: "",
    category: "",
    income: "",
    profit: "",
    password: "",
    confirmpassword: "",
    govtId: "",
    plans: "",
    // govtIdPhoto: "",
    // photo: ""
  });

  function handleChanges(e) {
    // e.preventDefault();

    setEpReg((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(epReg);

    const res=await fetch ('/epdata',{
      // "http://localhost:3000/submitEp"
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      crossDomain: true,
      body: JSON.stringify(epReg)
    });

    const data=await res.json();

    if(data.status === 422 || !data){
      window.alert('Invalid Registration');
      console.log('Invalid Registration');
    } else {
      window.alert('Valid Registration');
      console.log('Valid Registration');
      navigate('/eplogin');
    }
  }

  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(epReg);
  //   fetch("http://localhost:3000/submitEp", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(epReg),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("usersharkRegister");
  //       console.log(res);
  //     });
  // }

  return (
    <>
      <div className="epregistermaindiv">
        <div className="epsharkregister">
          <div className="left">
            <h1>Entrepreneur Sign up</h1>
            <form method="POST" onSubmit={handleFormSubmit}>
              <div className="form_left">
                <div className="input_div">
                  <i className="fa-solid fa-user"></i>
                  <div className="form-control">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      onChange={handleChanges}
                      value={epReg.name}
                      placeholder="Your Name"
                    />
                    <small>Error Message</small>
                  </div>
                </div>
                <div className="input_div">
                  <i className="fa-solid fa-envelope"></i>
                  <div className="form-control">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      onChange={handleChanges}
                      value={epReg.email}
                      placeholder="Your Email"
                    />
                    <small>Error Message</small>
                  </div>
                </div>

                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <div className="form-control">
                    <input
                      id="mobileNumber"
                      type="number"
                      name="mobileNumber"
                      onChange={handleChanges}
                      value={epReg.mobileNumber}
                      placeholder="Your Mobile Number"
                    />
                    <small>Error Message</small>
                  </div>
                </div>

                <div className="input_div">
                  <i className="fa-solid fa-user-tie"></i>
                  <div className="form-control">
                    <input
                      id="profession"
                      type="text"
                      name="profession"
                      onChange={handleChanges}
                      value={epReg.profession}
                      placeholder="Your Profession"
                    />
                    <small>Error Message</small>
                  </div>
                </div>

                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <div className="form-control">
                    <input
                      id="amount"
                      type="number"
                      name="amount"
                      onChange={handleChanges}
                      value={epReg.amount}
                      placeholder="Required Amount"
                    />
                    <small>Error Message</small>
                  </div>
                </div>
                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <div className="form-control">
                    <input
                      id="equity"
                      type="number"
                      name="equity"
                      onChange={handleChanges}
                      value={epReg.equity}
                      placeholder="Exchange Equity"
                    />
                    <small>Error Message</small>
                  </div>
                </div>

                <div className="input_div">
                  <i className="fa-solid fa-user"></i>
                  <div className="form-control">
                    <input
                      id="category"
                      type="text"
                      name="category"
                      onChange={handleChanges}
                      value={epReg.category}
                      placeholder="Business Category"
                    />
                    <small>Error Message</small>
                  </div>
                </div>

                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <div className="form-control">
                    <input
                      id="income"
                      type="number"
                      name="income"
                      onChange={handleChanges}
                      value={epReg.income}
                      placeholder="Monthly Income"
                    />
                    <small>Error Message</small>
                  </div>
                </div>
                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <div className="form-control">
                    <input
                      id="profit"
                      type="number"
                      name="profit"
                      onChange={handleChanges}
                      value={epReg.profit}
                      placeholder="Monthly Profit"
                    />
                    <small>Error Message</small>
                  </div>
                </div>

                <div className="input_div">
                  <i className="fa-solid fa-lock"></i>
                  <div className="form-control">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleChanges}
                      value={epReg.password}
                      placeholder="Your Password"
                    />
                    <small>Error Message</small>
                  </div>
                </div>
                <div className="input_div">
                  <i className="fa-solid fa-lock"></i>
                  <div className="form-control">
                    <input
                      id="confirmpassword"
                      type="password"
                      name="confirmpassword"
                      onChange={handleChanges}
                      value={epReg.confirmpassword}
                      placeholder="Your Confirm Password"
                    />
                    <small>Error Message</small>
                  </div>
                </div>
              </div>

              <div className="form_right">
                <div className="input_div">
                  <i className="fa-solid fa-phone"></i>
                  <div className="form-control">
                    <input
                      id="govtId"
                      type="number"
                      name="govtId"
                      onChange={handleChanges}
                      value={epReg.govtId}
                      placeholder="Goverment id number"
                    />
                    <small>Error Message</small>
                  </div>
                </div>

                {/* <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Upload any valid goverment id
                  </label>
                  <input class="form-control" type="file" id="formFile" />
                </div> */}

                {/* <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Upload Your Photo
                  </label>
                  <input class="form-control" type="file" id="formFile" />
                </div> */}

                <div class="mb-3">
                  <textarea
                    name="plans"
                    onChange={handleChanges}
                    value={epReg.govtId}
                    class="form-control"
                    id="plans"
                    rows="7"
                    placeholder="Future Plans"
                  ></textarea>
                </div>
                <Button variant="outlined" type="submit" className="leftbtn">
                  Register
                </Button>
              </div>
            </form>
          </div>
          <div className="right">
            <img src={signupimg} alt="" />
            <Button variant="outlined" type="submit">
              <NavLink to="/sharkslogin">Already Registered</NavLink>
            </Button>
          </div>
        </div>
      </div>

      {/* <script src="../EpRegScript.js"></script> */}
    </>
  );
};

export default Epregister;
