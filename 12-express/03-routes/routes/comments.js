const express = require('express');
const {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteCommentHandler,
} = require('../controllers/comments');

const router = express.Router();

router.get('/', getCommentsHandler);
router.post('/', postCommentsHandler);
router.get('/:commentId', getSingleCommentHandler);
router.delete('/:commentId', deleteCommentHandler);

module.exports = router;
