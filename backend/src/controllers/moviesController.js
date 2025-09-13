const { fetchMovies, getMovie } = require('../services/omdbService');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


exports.getAllMovies = async(req, res) => {
    try {
        const result = await prisma.movie.findMany({
            orderBy: {
                vote: 'desc',
            },});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data', details: error.message });
    }
}

exports.createMovie = async(req, res) => {
    const newMovie = req.body;

    try {
        const result = await prisma.movie.create({
            data: newMovie,
        });
        res.status(201).json(result);
    } catch (error){
        res.status(500).json({ error: 'Error creating data', details: error.message });
    }
};

exports.deleteMovie = async(req, res) => {
    const { id } = req.params;

    try {
        await prisma.movie.delete({
            where: { id: Number(id) }
        });
        res.status(204).send();
    } catch(error) {
        res.status(500).json({ error: 'Error deleting data', details: error.message });
    }
};

exports.voteMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await prisma.movie.update({
            where: { id: Number(id) },
            data: { vote: { increment: 1 } },
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error updating data', details: error.message });
    }
};

exports.searchMovies = async (req, res) => {
    try {
        const { title } = req.query;
        const result = await fetchMovies(title);
        res.status(200).json(result);
        } catch (error) {
        res.status(500).json({ error: 'Error fetching data', details: error.message });
    }
};

exports.getMoviefromApi = async (req, res) => {
    try {
        const { imdbID } = req.query;
        const result = await getMovie(imdbID);
        res.status(200).json(result);
        } catch (error) {
        res.status(500).json({ error: 'Error fetching data', details: error.message });
    }
}

