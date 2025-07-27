const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


exports.getAllMovies = async(req, res) => {
    try {
        const result = await prisma.movie.findMany({
            orderBy: {
                vote: 'desc',
            },});
        res.json(result)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data', details: error.message });
    }
}

exports.createMovie = async(req, res) => {
    const { movie } = req.body;

    try {
        const result = await prisma.movie.create({
            data: movie,
        });
        res.json(result);
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
    } catch {
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
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error updating data', details: error.message });
    }
};
