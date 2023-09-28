const express = require('express');
const {
  getOverView,
  getTour,
  getLoginForm,
  getAccount,
  updateUserData,
  getMyTours,
  alerts,
  getSignUpForm
} = require('../controllers/viewController');
const { isLoggedIn, protect } = require('../controllers/authController');
// const { createBookingCheckout } = require('../controllers/bookingController');

const router = express.Router();

router.use(alerts);

// router.get('/', createBookingCheckout, isLoggedIn, getOverView);
router.get('/', isLoggedIn, getOverView);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/signup', isLoggedIn, getSignUpForm);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
