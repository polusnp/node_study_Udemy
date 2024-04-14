const express = require('express');

const PORT = 5000;
const app = express();

const firstHandler = (req, res, next) => {
    console.log('First handler');
    next();
};
const secondHandler = (req, res) => res.send('Responce from Express');

app.get('/', firstHandler, secondHandler);
app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));
