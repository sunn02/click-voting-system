const express = require("express");
const router = express.Router();
const methodOverride = require('method-override');
const Controller = require("../controllers/moviesController");

router.use(methodOverride("_method")); 

router.get("/movies", Controller.getAllMovies);
router.post("/movie", Controller.createMovie);
router.delete("/movie/:id", Controller.deleteMovie);
router.post('/vote/:id', Controller.voteMovie);
router.get('/search', Controller.searchMovies);
router.get('/movie', Controller.getMoviefromApi);

module.exports = router;