const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Set up your MongoDB connection here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
