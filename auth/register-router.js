const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model');
// TODO add validateUser helper to users directory

router.post('/', (req, res) => {

  let user = req.body;
  res.json({ message: 'register' });
  

})

module.exports = router;