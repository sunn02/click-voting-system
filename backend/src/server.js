const express = require('express');
const path = require('path');
const route = require('./routes/moviesRoutes');
const cors = require('cors');
const app = express();
const PORT = 8001;

require('dotenv').config();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api", route);

app.listen(PORT, console.log(`Server listening on http://localhost:${PORT}`));