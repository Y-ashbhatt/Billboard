const rateLimit = require('express-rate-limit');

//Setting Rate Limit for an IP for a window of 1 minute
const limiter = rateLimit({
    windowMs : 1 * 60 * 1000, 
    max : 10,
    message : 'Too many requests from this IP, please try again later.',
    standardHeaders : true,
    legacyHeaders : false,
});

module.exports = limiter;