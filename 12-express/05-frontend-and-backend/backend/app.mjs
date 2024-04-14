import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const PORT = 5000;
const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res) => {
    const personData = {
        name: 'John',
        position: true,
    };
    // console.log(req.body);
    return res.json(personData);
});

app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));
