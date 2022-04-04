//import express library
const express = require("express");
const app = express();
const { getRandomElement } = require("./utils");
const { quotes } = require("./data");

//Create router and export
const quoteRouter = express.Router();
module.exports = quoteRouter;

//get random quote
quoteRouter.get('/', (req, res, next) => {
    
})