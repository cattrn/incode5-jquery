const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/:id', (req, res) => {
  axios.get(`/movie/${req.params.id}?api_key=${process.env.TMDB_API_KEY}`)
  .then(response => {
    res.send(response.data)
  })
  .catch(err => {
    if (err.response) 
      res.json({
        "status": err.response.status,
        "message": err.response.data.status_message
      })
    else res.send(err.message)
  })
})

module.exports = router