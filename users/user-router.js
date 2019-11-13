const router = require('express').Router();

const Users = require('./user-model.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      // uncomment the next line and comment out the message below it
      // res.json(users);
      res.status(200).json({ message: "Here, have some users!" });
    })
    .catch(err => res.send(err));
})

module.exports = router;