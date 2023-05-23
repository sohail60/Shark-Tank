const jwt=require('jsonwebtoken');
const User=require('../model/epSchema');

function Authenticate(req,res,next){
    try{
        const token=req.cookies.jwtoken;

    } catch (error) {
        res.status(401).send({'Unauthorized': 'No token provided'});
        console.log(error);
    }
}


