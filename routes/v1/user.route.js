const express = require("express");
const userController = require("../../controllers/user.controller");
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');


router.post("/signup", userController.signup);
router.get("/signup/confirmation/:token", userController.confirmEmail);

router.post("/login", userController.login);

router.get("/me", verifyToken, userController.getMe);


module.exports = router;