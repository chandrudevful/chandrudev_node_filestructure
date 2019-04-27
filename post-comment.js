const express = require('express');
const router = express.Router();
const postComment = require('../controller/post-comment');

router.post('/',postComment);

module.exports = router;