//import express library
const express = require("express");
const app = express();
const { getRandomElement } = require("../utils");
const { quotes } = require("../data");

//Create router and export
const quoteRouter = express.Router();
module.exports = { quoteRouter };

//get random quote
quoteRouter.get("/random", (req, res, next) => {
  const { quote, person } = getRandomElement(quotes);
  const response = {
    quote: { quote, person },
  };
  res.send(response);
});

//get all quotes no params
quoteRouter.get("/", (req, res, next) => {
  const query = req.query;
  let response = { quotes: [] };

  //Loop through all quotes
  quotes.map((item) => {
    //deconstruct quote
    const { quote, person } = item;
    //send all quotes if no query
    if (Object.keys(query).length === 0) {
      response.quotes.push({ quote, person });
    } else {
      const author = req.query.person;
      if (author === person) {
        response.quotes.push({ quote, person });
      }
    }
  });
  res.send(response);
});
