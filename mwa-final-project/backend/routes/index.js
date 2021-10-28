const express = require("express");
const userController = require("../controllers/userContoller");
const rideController = require("../controllers/rideContoller");
var auth = require("../middlewares/authorization");
const passport = require('passport');

const router = express.Router();




router.get('/', function (req, res) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.json('homepage')
})


//-----API TO LOGOUT USER -----
router.get('/logout', function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/');

    });

});




router.get('/rides/all', rideController.getAllRides)
router.post('/rides/publish', rideController.publishRide)
router.post('/rides/search', rideController.searchRide)
router.delete('/ride/delete', rideController.deleteRide)
router.put('/rides/update', rideController.updateRide)
router.get('/driver/rides/:email', rideController.getRidesByDriver)



module.exports = router;
