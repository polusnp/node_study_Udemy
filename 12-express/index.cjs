const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1><br><h2>NODE.JS!</h2>');
});

app.listen(PORT, () => console.log(`App is listening on port ${port}`));
