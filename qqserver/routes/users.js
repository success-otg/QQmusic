const express = require('express');
const router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/register', function(req, res, next) {
  User.create({username: 'Taylor'}).then(res=>{
    console.log(res)
  })
  res.json({
    username: 'cc',
    password: '123456'
  });
});

module.exports = router;
