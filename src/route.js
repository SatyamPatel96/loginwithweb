const express = require('express');
const router = express.Router();
const usercontroller = require("./controller.js");

const Authentication= require("./authentication.js")



router.post("/createuser",usercontroller.createuser)




router.post("/login",usercontroller.login)

 router.post("/loginformwindow",Authentication.Authenticate,usercontroller.loginform)

module.exports = router;