const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/getQuizzes', (req, res) => {
    const quizzes = ['Math', 'History', 'Programming', 'Science'];
    res.json(quizzes);
});

app.listen(3001, () => console.log('App is listening on Port 3001...'));