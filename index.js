const express = require('express');
const massive = require('massive');
const {getMovies, addMovie, updateTheaterStatus, deleteMovie} = require('./movieController');
require('dotenv').config()

const app = express();

app.use(express.json());

massive({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
})
.then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Database connection established')
})
.catch((e) => {
    console.log('DB connection problem: ', e)
})

app.get('/api/movies', getMovies);
app.post('/api/movies', addMovie);
app.put('/api/movies/:id', updateTheaterStatus);
app.delete('/api/movies/:id', deleteMovie);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))