var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', controller.root);
router.get('/:category/:id/detail', controller.detail)
module.exports = router;
