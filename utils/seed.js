const connection = require('../config/connection');
const { Course, Student } = require('../models');
const { data } = require('./data');

connection.on('error', (err) => err);

