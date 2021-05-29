const express = require('express');
var router = express.Router()
var controllers= require('../controllers')

router.get('/',controllers.read)
router.get('/:id',controllers.readById)
router.get('/:id/styles',controllers.readStyles)
router.get('/:id/related',controllers.readRelated)




module.exports = router