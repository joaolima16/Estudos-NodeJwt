const express = require('express');
const Verification = require('./controllers/UserVerification');
const Routes = express.Router();

Routes.post('/',Verification.LoginUser)


module.exports = Routes;