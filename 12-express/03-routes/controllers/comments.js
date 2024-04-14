const getCommentsHandler = (req, res) => res.send('Get comments route');
const postCommentsHandler = (req, res) => res.send('Post comments route');
const getSingleCommentHandler = (req, res) => {
    res.send(`Get comment route. CommentId: ${req.params.commentId}`);
};
const deleteCommentHandler = (req, res) =>
    res.send(
        `Delete comment route. Comment with id: ${req.params.commentId} was deleted`
    );

module.exports = {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteCommentHandler,
};
