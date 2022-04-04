//import express library
const express = require("express");
const app = express();
//Import helper functions
const { quotes } = require("./data");
const quoteRouter = require("./Routes/apiRoutes");
const { getRandomElement } = require("./utils");
//Set port for server
const PORT = process.env.PORT || 4001;

app.use(express.static("public"));
//mount router
app.use('/api/quotes', quoteRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
