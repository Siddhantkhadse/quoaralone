const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile', passport.checkAuthentication,usersController.Profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


router.post('/create', usersController.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);

module.exports = router;
// const express = require('express');
// const router = express.Router();

// const passport =require('passport');

// const userController = require('../controllers/users_controller');

// router.get('/profile',userController.Profile);

// router.get('/sign-in',userController.signIn);
// router.get('/sign-up',userController.signUp);
// router.post('/create',userController.create);
// router.post('/create-session', userController.createSession);


// router.get('/sign-out', userController.destroySession);


// module.exports=router;  