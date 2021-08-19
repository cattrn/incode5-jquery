const express = require('express')
const morgan = require('morgan')
const axios = require('axios')
// might need db connection

const app = express()
const PORT = process.env.PORT || 3000

// require routes
const homeRouter = require('./routes/home')
const movieRouter = require('./routes/movie')
const apiRouter = require('./routes/api')

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static folder
app.use(express.static('public'))

// morgan config
app.use(morgan('dev'))

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// axios config
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

// middleware - routes
app.use('/movie', movieRouter)
app.use('/api', apiRouter)
app.use('/', homeRouter)

app.listen(PORT, () => {
  console.log(`You guys are great! Here's your app: http://localhost:${PORT}`)
})