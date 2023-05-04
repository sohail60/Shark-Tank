const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken');

const epSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    // unique: true,
  },
  profession: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  equity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  govtId: {
    type: Number,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
      required: true,
      }
    },
  ],
  // govtIdPhoto:
  // {   data: Buffer,
  //     contentType: String
  // },
  // photo:
  // {   data: Buffer,
  //     contentType: String
  // },
  plans: { 
    type: String,
    required: true
 }
});

epSchema.pre('save', async function(next){
  // console.log('inside mw save');

  if(this.isModified('password')){
    this.password= await bcrypt.hash(this.password,12);
  }
})

epSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens= this.tokens.concat({token:token});
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Ep = new mongoose.model("Ep", epSchema);

module.exports = Ep;
