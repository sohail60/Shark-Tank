import React,{useState} from "react";
import Button from "@mui/material/Button";
import loginimg from "../images/login.webp";
import { NavLink,useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const [sharkLog, setSharkLog] = useState({
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setSharkLog((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Shark Login')
    console.log(sharkLog);

    const res= await fetch('/sharklog',{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(sharkLog),
    })
    // "http://localhost:3000/submitShark"
    const data=await res.json();

    if(data.status === 400 || !data){
      window.alert('Invalid Data');
      console.log('Invalid Data');
    } else {
      window.alert('Valid Data');
      console.log('Valid Data');
      navigate('/business');
    }
  };

  return (
    <>
      <div className="logindiv">
        <div className="slogin">
          <div className="left">
            <img src={loginimg} alt="loginimg" />
            <Button variant="outlined">
              <NavLink to="/sharkregister">Create Account</NavLink>
            </Button>
          </div>

          <div className="right">
            <h1>Sharks Login Form</h1>
            <form method="POST" onSubmit={handleFormSubmit}>
              <div>
                <i className="fa-solid fa-user"></i>
                <input
                  type="email"
                  name="email"
                  value={sharkLog.email}
                  onChange={handleChanges}
                  placeholder="Your Email"
                />
              </div>
              <div>
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  value={sharkLog.password}
                  onChange={handleChanges}
                  placeholder="Your Password"
                />
              </div>
              <Button type="submit" variant="outlined">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
