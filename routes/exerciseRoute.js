const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

router.get('/exercises', async (req, res) => {
    try {
        const getExercises = await Exercise.find();
        res.send(getExercises);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/exercises/add', async (req, res) => {
    const newExercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date)
    });

    try {
        const saveExercises = await newExercise.save();
        res.json('Exercise Added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/exercises/:id', async (req, res) => {
    try {
        const updateExercises = await Exercise.findById(req.params.id);
        res.json(updateExercises);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.delete('/exercises/:id', async (req, res) => {
    try {
        const deleteExercises = await Exercise.findByIdAndDelete(req.params.id);
        res.json('Exercise Deleted');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/update/:id', async (req, res) => {

    try { 
        const update = await Exercise.updateOne(
            { _id: req.params.id },
            { $set: { 
                username: req.body.username,
                description: req.body.description,
                duration: Number(req.body.duration),
                date: Date.parse(req.body.date) 
            }});
            res.json('Exercise updated');
    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
    
});

module.exports = router;