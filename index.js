const express = require('express')
// might need db connection

const app = express()
const PORT = process.env.PORT || 3000

// require routes
const homeRouter = require('./routes/home')

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static folder
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// middleware - routes
app.use('/', homeRouter)

app.listen(PORT, () => {
  console.log(`You guys are great! Here's your app: http://localhost:${PORT}`)
})