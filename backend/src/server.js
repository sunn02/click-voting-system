const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const route = require('./routes/moviesRoutes');
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride('_method'));

app.use("/", route);

app.listen(PORT, console.log(`Server listening on http://localhost:${PORT}`));