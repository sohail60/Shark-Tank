import React from "react";
import signupimg from "../images/signin.webp";
import Button from "@mui/material/Button";
import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Sharkregister.css";
// import "../SharkRegScript.js";

const Sharkregister = () => {
  const navigate= useNavigate();
  const [sharkReg, setSharkReg] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    profession: "",
    income: "",
    password: "",
    confirmpassword: "",
    govtId: "",
    // govtIdPhoto: "",
    // photo: ""
  });

  function handleChanges(e) {
    setSharkReg((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Shark Register')
    console.log(sharkReg);

    const {name,email,mobileNumber,profession,income,password,confirmpassword,govtId} = sharkReg;

    const res= await fetch('/sharkdata',{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        profession: profession,
        income: income,
        password: password,
        confirmpassword: confirmpassword,
        govtId: govtId,
      }),
    })
    // "http://localhost:3000/submitShark"
    
    const data=await res.json();

    if(data.status === 422 || !data){
      window.alert('Invalid Registration');
      console.log('Invalid Registration');
    } else {
      window.alert('Valid Registration');
      console.log('Valid Registration');
      navigate('/sharkslogin');
    }
  }

  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(sharkReg);
  //   fetch("http://localhost:3000/submitShark", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(sharkReg),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("usersharkRegister");
  //       console.log(res);
  //       console.log("usersharkRegister2");
  //     });
  // }

  return (
    <>
      <div className="signupmaindiv">
        <div className="sharkregister">
          <div className="left">
            <h1>Sharks Sign up</h1>
            <form id="form" method="POST" >
            {/* onSubmit={handleFormSubmit} */}
              {/* action="http://localhost:3000/submitShark" */}
              <div className="input_div">
                <i className="fa-solid fa-user"></i>
                <div className="form-control">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChanges}
                    value={sharkReg.name}
                    placeholder="Name"
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
                    value={sharkReg.email}
                    placeholder="Email"
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
                    value={sharkReg.mobileNumber}
                    placeholder="Mobile Number"
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
                    value={sharkReg.profession}
                    placeholder="Profession"
                  />
                  <small>Error Message</small>
                </div>
              </div>

              <div className="input_div">
                <i class="fa-sharkRegular fa-dollar-sign"></i>
                <div className="form-control">
                  <input
                    id="income"
                    type="number"
                    name="income"
                    onChange={handleChanges}
                    value={sharkReg.income}
                    placeholder="Income"
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
                    value={sharkReg.password}
                    placeholder="Password"
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
                    value={sharkReg.confirmpassword}
                    placeholder="Confirm Password"
                  />
                  <small>Error Message</small>
                </div>
              </div>

              <div className="input_div">
                <i className="fa-solid fa-phone"></i>
                <div className="form-control">
                  <input
                    id="govtId"
                    type="number"
                    name="govtId"
                    onChange={handleChanges}
                    value={sharkReg.govtId}
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

              <Button variant="outlined" type="submit" className="leftbtn" onClick={handleFormSubmit}>
                Register
              </Button>
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
      {/* <script src='../SharkRegScript'></script> */}
    </>
  );
};

export default Sharkregister;
