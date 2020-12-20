var express = require('express');
var router = express.Router();
var usersController = require ('../controllers/usersController')

/* GET users listing. */
router.get('/:id', usersController.main);

module.exports = router;
