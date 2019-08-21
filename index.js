const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const exerciseRoute = require('./routes/exerciseRoute');
const usersRoute = require('./routes/usersRoute');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

app.use(exerciseRoute);
app.use(usersRoute);

if (process.env.NODE_ENV === 'production') {
    // Express will serve prod assets 
    // main.js or main.css
    app.use(express.static('client/build'));

    // Express will serve index.html if
    // route is not recognized
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port); 