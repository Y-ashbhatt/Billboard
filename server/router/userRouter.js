const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logout } = require('../controllers/authController');
const { getCampaigns, processBillboard, processBanner, deleteBillboard, addAction, deleteAction, getCampaign } = require('../controllers/billboardController');
const { getUser } = require('../controllers/userController')
const { isLoggedIn } = require('../middlewares/userMiddleware');
const limiter = require('../middlewares/rateLimiter');

router.get('/', isLoggedIn, getUser);
router.post('/register', limiter, registerUser);
router.post('/login', limiter, loginUser);
router.get('/logout', logout);

router.get('/getCampaigns',isLoggedIn,getCampaigns)
router.post('/get-campaign',isLoggedIn,getCampaign)
router.post('/process-billboard', isLoggedIn,processBillboard)
router.post('/process-banner', isLoggedIn,processBanner)
router.delete('/delete-billboard/:id',isLoggedIn,deleteBillboard)
router.post('/save-action',isLoggedIn,addAction)
router.delete('/delete-action/:actionId/:billboardId',isLoggedIn,deleteAction)

module.exports = router;