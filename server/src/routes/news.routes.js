const express = require('express');
const { newsHomePage } = require('../controllers/news.controllers');

const newRoutes = express.Router();

newRoutes.get('/', newsHomePage);

module.exports = newRoutes;