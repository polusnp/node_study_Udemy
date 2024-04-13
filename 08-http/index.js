const http = require('http');
const PORT = 5000;
const {
    getHTML,
    getText,
    handleNotFound,
    getComments,
    postComment,
    getHome,
} = require('./handlers');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
    }
    if (req.method === 'GET' && req.url === '/html') {
        return getHTML(req, res);
    }

    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res);
    }

    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }

    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res);
    }
    handleNotFound(req, res);
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
