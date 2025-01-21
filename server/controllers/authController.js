const bcrypt = require('bcryptjs');
const userModel = require('../models/User');
const { generateToken } = require('../utilities/generateToken');


//route for user registration
exports.registerUser = async (req, res , next) => {
    try {
        const { name, email, password } = req.body;

        //checking if user with given email already exists
        const checkUser = await userModel.findOne({ email: email });
        if (checkUser) return res.status(400).json({ msg: 'User with this email already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await userModel.create({ name, email, password : hashedPassword })

        const token = generateToken(user);

        res.cookie("Billboard_AI", token, {
            httpOnly: true,//allow only http requests
            sameSite: 'none', //CSRF protection
            secure : true,
            maxAge: 86400000, //1 day
        });
        res.status(201).json({ msg: 'User Created Successfully' });
    }
    catch (error) {
        next(error)
    }
};

//function for user login
exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //check if email is valid
        let user = await userModel.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

        const passVerify = await bcrypt.compare(password,user.password);
        if(passVerify) {
            let token = generateToken(user);

                //check if token is valid
                if(token === false) return res.status(400).json({success : false, msg : 'Something Went Wrong'});

                //setting cookie on user browser
                res.cookie("Billboard_AI", token, {
                    httpOnly: true, 
                    sameSite: 'none', //CSRF protection
                    secure : true,
                    maxAge: 86400000, //1 day
                });
                return res.status(200).json({ msg: "User Login Successfull" });
        }
        res.status(400).json({ msg: 'Invalid Credentials!' })
    }
    catch (error) {
        next(error)
    }
}


//function for user logout
exports.logout = (req, res,next) => {
    try {
        //remove the value of token from user browser
        res.clearCookie('Billboard_AI',{
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
        });
        res.status(200).json({ msg: 'Logout Successfull' });
    }
    catch (error) {
        next(error)
    }
}