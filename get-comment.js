const express = require('express');
const router = express.Router();
const getComment = require('../controller/get-comment');

router.get('/:id',getComment);

module.exports = router;