const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const usersRoute = require('./routes/usersRoute');
const exerciseRoute = require('./routes/exerciseRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//Mongo Connection
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

//Routes
app.use(exerciseRoute);
app.use(usersRoute);

// Start server
app.listen(PORT);
