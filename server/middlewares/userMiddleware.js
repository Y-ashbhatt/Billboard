const jwt = require('jsonwebtoken');
const userModel = require('../models/User');


//middleware for identifying whether user is logged in using cookie sent with every protected route
exports.isLoggedIn = async (req, res, next) => {
    try {
        //check if token exists
        if (!req.cookies.Billboard_AI || req.cookies.Billboard_AI === ""){
            return res.status(400).json({ msg: "You Need To Login First" });
        }

        //decoding token
        let decoded = jwt.verify(req.cookies.Billboard_AI, process.env.JWT_KEY);

        //Does User Exists
        let user = await userModel.findOne({ email: decoded.email }).select("-password");
        if (user) {
            req.user = user;
            next();
        }
        else return res.status(400).json({ msg: "You Need To Login First" })
    }
    catch (error) {
        next(error);
    }
}