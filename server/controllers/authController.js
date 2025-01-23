const bcrypt = require('bcryptjs');
const { generateToken } = require('../utilities/generateToken');
const { doesUserExist, registerUser, loginUser } = require('../controllers/dbController');

//route for user registration
exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, mobile_number, password } = req.body;

        //checking if user with given email already exists
        const userExists = await doesUserExist(email);
        if (userExists.length > 0) return res.status(400).json({ msg: "Email already registered" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userId = await registerUser(name, mobile_number, email, hashedPassword);
        if (!userId) return res.status(400).json({ msg: "Something went wrong" });

        const token = generateToken({ email, userId });
        res.cookie("Billboard_AI", token, {
            httpOnly: true,//allow only http requests
            sameSite: 'none', //CSRF protection
            secure: true,
            maxAge: 86400000, //1 day
        });
        res.status(201).json({ msg: "User register successful" })
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
        const user = await loginUser(email);
        if (user.length === 0) return res.status(400).json({ msg: 'Invalid Credentials' });

        const passVerify = await bcrypt.compare(password, user[0].pass);
        if (!passVerify) return res.status(400).json({ msg: 'Invalid Credentials!' })
        
        let token = generateToken({email, userId:user[0].id});
        res.cookie("Billboard_AI", token, {
            httpOnly: true,
            sameSite: 'none', //CSRF protection
            secure: true,
            maxAge: 86400000, //1 day
        });
        res.status(200).json({msg : "User login successful"});
    }
    catch (error) {
        next(error)
    }
}

//function for user logout
exports.logout = (req, res, next) => {
    try {
        //remove the value of token from user browser
        res.clearCookie('Billboard_AI', {
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