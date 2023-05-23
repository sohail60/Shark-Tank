const express= require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors = require('cors');
// const bodyParser=require('body-parser');
const app=express();

dotenv.config({path: './config.env'})

require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'))
// app.use(cors());

app.use(cors({
    origin: '*'
  }));
  

// Listening
const PORT=process.env.PORT;
app.listen(5000,(err) => {
    console.log('Listening at port 5000');
})