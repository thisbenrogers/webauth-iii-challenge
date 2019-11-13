const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model');

router.post('/', (req, res) => {
  res.json({ message: 'login' });
})

module.exports = router;