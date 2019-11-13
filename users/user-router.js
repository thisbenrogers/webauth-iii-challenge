const router = require('express').Router();

const Users = require('./user-model.js');

const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      // TODO uncomment the next line and comment out the message below it
      // res.json(users);
      res.status(200).json({ message: "Here, have some users!" });
    })
    .catch(err => res.send(err));
})

module.exports = router;