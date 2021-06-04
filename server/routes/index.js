const express = require('express');
var router = express.Router()
var controllers= require('../controllers')

router.get('/',controllers.read)
router.get('/:id',controllers.readById)
router.get('/:id/styles',controllers.readStyles)
router.get('/reviews/:id',controllers.readReviews)




module.exports = router