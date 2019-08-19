const express = require('express');
const router = express.Router();
const Users = require('../models/User');

router.get('/users', async (req, res) => {
    const getUser = await Users.find();
    try {
        res.json(getUser);
    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/users/add', async (req, res) => {
    const username = req.body.username;
    const newUser = new Users({ username })
    try {
        await newUser.save();
        res.send('User Added');
    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
});


module.exports = router;