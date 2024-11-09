const express = require("express");
require("dotenv").config();
const app = express();
const data = require("./data.json");

const PORT = process.env.PORT || 8181;

// Define a route to serve the JSON data
app.get("/api/data", (req, res) => {
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
