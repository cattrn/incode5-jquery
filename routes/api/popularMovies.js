const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res) => {
  axios.get('/discover/movie?api_key=' + process.env.TMDB_API_KEY)
  .then(response => {
    res.send(response.data)
  })
  .catch(err => {
    res.json({
      "status": err.response.status,
      "message": err.response.data.status_message
    })
  })
})

module.exports = router