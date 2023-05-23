const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const Shark = require("../model/sharkSchema");
const Ep = require("../model/epSchema");
const authenticate= require('../middleware/authenticate')
// const app=express();
// const cors = require('cors');
// app.use(cors());


// Routes
// router.get("/", (req, res) => {
//   res.send("Hello!!");
// });

// router.get("/", (req, res) => {
//   res.send("Hello!!");
// });



// router.get("/contact", (req, res) => {
//   res.send("Hello!!");
// });

// router.get("/sharkregister", (req, res) => {
//   res.send("Hello!!");
// });

// router.get("/sharklogin", (req, res) => {
//   res.send("Hello!!");
// });

// router.get("/epregister", (req, res) => {
//   res.send("Hello!!");
// });

// router.get("/eplogin", (req, res) => {
//   res.send("Hello!!");
// });

// router.get("/shark", (req, res) => {
//   res.send("Hello!!");
// });

// router.get("/ep", (req, res) => {
//   res.send("Hello!!");
// });

// router.get("/about", authenticate, (req, res) => {
//   console.log("about");
//   res.send("Hello!!");
// });


router.post("/sharkdata", async (req, res) => {
  // Collecting data from Frontend
  const {
    name,
    email,
    phone,
    profession,
    income,
    password,
    confirmpassword,
    govtId,
  } = req.body;

  // If any fields are left empty, then return an error msg with status 422
  if (
    !name ||
    !email ||
    !phone ||
    !profession ||
    !income ||
    !password ||
    !confirmpassword ||
    !govtId
  ) {
    return res.status(422).json({ error: "Field left empty" });
  }

  try {
    // If already a user exists, then return an error msg with status 422
    const userExist = await Shark.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "User already exists" });
    } else if (password != confirmpassword) {
      return res.status(422).json({ error: "Passwords not matching" });
    }

    const shark = new Shark({
      name,
      email,
      phone,
      profession,
      income,
      password,
      govtId,
    });

    // Called bcrypt middleware here

    const sharkRegister = await shark.save();

    // If failed to register, then return an error msg with status 500
    if (sharkRegister) {
      res.status(201).json({ message: "Registered successfully" });
    } else {
      res.status(500).json({ error: "Failed to Registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/epdata", async (req, res) => {
  const {
    name,
    email,
    phone,
    profession,
    amount,
    equity,
    category,
    income,
    profit,
    password,
    confirmpassword,
    govtId,
    plans,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !profession ||
    !amount ||
    !equity ||
    !category ||
    !income ||
    !profit ||
    !password ||
    !confirmpassword ||
    !govtId ||
    !plans
  ) {
    return res.status(422).json({ error: "Field left empty" });
  }

  try {
    const userExist = await Ep.findOne({ email: email });
    // console.log("inside try");
    if (userExist) {
      return res.status(422).json({ error: "User already exists" });
    } else if (password != confirmpassword) {
      return res.status(422).json({ error: "Passwords not matching" });
    }

    const ep = new Ep({
      name,
      email,
      phone,
      profession,
      amount,
      equity,
      category,
      income,
      profit,
      password,
      govtId,
      plans,
    });

    // Called bcrypt middleware here

    const epRegister = await ep.save();

    if (epRegister) {
      res.status(201).json({ message: "Registered successfully" });
    } else {
      res.status(500).json({ error: "Failed to Registered" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

router.post("/sharklog", async (req, res) => {
  // Collecting data from Frontend
  const { email, password } = req.body;

  // If any of the fields are left empty, then return an error msg with status 422
  if (!email || !password) {
    return res.status(400).json({ error: "Field left empty" });
    console.log('Field empty');
  }

  try {
    console.log('inside try');
    // If the user doesn't exist, then return an error msg with status 422
    const userLogin = await Shark.findOne({ email: email });

    if (!userLogin) {
      return res.status(400).json({ error: "Invalid Credentails" });
    }

    // Compare the passwords
    const isMatch = await bcrypt.compare(password, userLogin.password);

    // Generate cookie
    const token = await userLogin.generateAuthToken();
    console.log(token);

    res.cookie('jwtoken',token, {
      expires: new Date(Date.now()+108000),
      httpOnly: true
    });

    // If passwords don't match, then return an error msg with status 422
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentails" });
    } else {
      return res.status(201).json({ message: "Login successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/eplog", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Field left empty" });
  }

  try {
    const userLogin = await Ep.findOne({ email: email });

    if (!userLogin) {
      return res.status(422).json({ error: "Invalid Credentails" });
    }

    const isMatch = await bcrypt.compare(password, userLogin.password);

    const token = await userLogin.generateAuthToken();
    console.log(token);

    res.cookie('jwtoken',token, {
      expires: new Date(Date.now()+108000),
      httpOnly: true
    });

    if (!isMatch) {
      return res.status(422).json({ error: "Invalid Credentails" });
    } else {
      return res.status(201).json({ message: "Login successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
