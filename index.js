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

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useCreateIndex: true });

app.use(exerciseRoute);
app.use(usersRoute);

app.listen(port); 