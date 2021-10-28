var express = require('express');
const passport = require('passport');
const userController = require("../controllers/userContoller");
var auth = require("../middlewares/authorization");

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', userController.doLogin)
router.post('/signup',  userController.doSignUP)
router.get('/profile',passport.authenticate('jwt',{session:false}), userController.getProfile)


module.exports = router;
