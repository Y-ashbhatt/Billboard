const jwt = require('jsonwebtoken');

//Generate token to store in cookies
const generateToken = function(user){
    try{
        const token = jwt.sign({email:user.email, id:user.userId}, process.env.JWT_KEY);
        if(token) return token;
        else return false;
    }
    catch(error){
        throw new Error("Error Generating Token");
    }
}

module.exports.generateToken = generateToken;