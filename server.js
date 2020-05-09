const express = require("express");
const axios = require("axios");

const app = express();

const port = 5000;
app.listen(5000, () => {
  console.log(`Listening at port ${port}`);
});

// Middleware
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
