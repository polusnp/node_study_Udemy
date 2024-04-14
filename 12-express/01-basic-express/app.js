const express = require('express');
const PORT = 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Responce from express');
});

app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));
