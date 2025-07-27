const express = require("express");
const router = express.Router();
const methodOverride = require('method-override');
const Controller = require("../controllers/moviesController");

router.use(methodOverride("_method")); 

router.get("/", Controller.getAllMovies);
router.post("/", Controller.createMovie);
router.delete("/:id", Controller.deleteMovie);
router.post('/vote/:id', Controller.voteMovie);

module.exports = router;