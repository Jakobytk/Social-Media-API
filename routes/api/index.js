const router = require('express').Router();
const ThoughtRoutes = require('./ThoughtRoutes');
const UserRoutes = require('./UserRoutes');

router.use('/Thought', ThoughtRoutes);
router.use('/User', UserRoutes);

module.exports = router;
