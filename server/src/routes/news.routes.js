const express = require('express');
const { 
    newsHomePage, 
    getNewsByID,
    searchNews, 
} = require('../controllers/news.controllers');

const newRoutes = express.Router();

newRoutes.get('/', newsHomePage);
newRoutes.get("/:id", getNewsByID);
newRoutes.post("/", searchNews);

module.exports = newRoutes;