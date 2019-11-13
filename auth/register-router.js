const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model.js');
const { validateUser } = require('../users/user-helpers.js');

router.post('/', (req, res) => {

  let user = req.body;

  const validateResult = validateUser(user);

  if (validateResult.isSuccessful === true) {
    
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      })

  } else {

    res.status(400).json({
      message: 'Invalid user info, see errors',
      errors: validateResult.errors
    });

  }

})

module.exports = router;