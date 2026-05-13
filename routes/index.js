const router = require('express').Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.use('/users', require('./users'));

module.exports = router;
