const jwt = require('jsonwebtoken');
const { doesUserExist } = require('../controllers/dbController');


//middleware for identifying whether user is logged in using cookie sent with every protected route
exports.isLoggedIn = async (req, res, next) => {
    try {
        //check if token exists
        if (!req.cookies.Billboard_AI || req.cookies.Billboard_AI === "") {
            return res.status(400).json({ msg: "You Need To Login First" });
        }

        //decoding token
        let decoded = jwt.verify(req.cookies.Billboard_AI, process.env.JWT_KEY);
        const user = await doesUserExist(decoded.email);
        if (user.length === 0) return res.status(400).json({ msg: "You need to login first" })
        req.user = {email : user[0].email,id : user[0].id};
        next();
}
    catch (error) {
            next(error);
        }
    }