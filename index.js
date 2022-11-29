require('dotenv').config()
const express = require('express')
const app = express()

const router = require('./controllers/places')

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))

app.use('/places', router)

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)




