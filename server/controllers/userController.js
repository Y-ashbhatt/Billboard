const userModel = require('../models/User');

//get information of user
exports.getUser = (req, res,next) => {
    try{
    res.status(200).json({ user: req.user })
    }
    catch(error){
        next(error);
    }
}