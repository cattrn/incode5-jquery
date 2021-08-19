const express = require('express')
const router = express.Router()

const individualMovie = require('./api/individualMovie')
const popularMovies = require('./api/popularMovies')

router.use('/individual-movie', individualMovie)
router.use('/popular-movies', popularMovies)

module.exports = router