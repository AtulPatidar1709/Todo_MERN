const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
require('./Models/db');

const taskRoutes = require('./Routes/tasksRoutes');

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());


app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})