const express = require('express');
const router = express.Router();

const { signup, signin, signout } = require("../controllers/auth_controllers");
const { userSignupValidator } = require("../validator");

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);



module.exports = router;