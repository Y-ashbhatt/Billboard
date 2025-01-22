const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logout } = require('../controllers/authController');
const { getProcessedBillboards, processBillboard, processBanner, saveFinalBillboardData } = require('../controllers/billboardController');
const { isLoggedIn } = require('../middlewares/userMiddleware');
const { getUser } = require('../controllers/userController')
const limiter = require('../middlewares/rateLimiter');

router.get('/', isLoggedIn, getUser);
router.post('/register', limiter, registerUser);
router.post('/login', limiter, loginUser);
router.get('/logout', logout);

router.get('/getUserInfo',isLoggedIn,getProcessedBillboards)
router.post('/process-billboard', isLoggedIn,processBillboard)
router.post('/process-banner', isLoggedIn,processBanner)
router.post('/save-final-billboard',isLoggedIn,saveFinalBillboardData)

module.exports = router;