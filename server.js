const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const path = require('path')

const connectDB = require('./server/database/connection')
const app = express()


dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 4000

// Begin Database Connected
connectDB();
// End

app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))


app.set('view engine', 'ejs')

// This link added for Backend
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/images', express.static(path.resolve(__dirname, 'assets/images')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/vendors', express.static(path.resolve(__dirname, 'assets/vendors')))
app.use('/fonts', express.static(path.resolve(__dirname, 'assets/fonts')))

// This link added for Frontend
app.use('/frontsite/css', express.static(path.resolve(__dirname, 'assets/frontsite/css')))
app.use('/frontsite/js', express.static(path.resolve(__dirname, 'assets/frontsite/js')))
app.use('/frontsite/fonts', express.static(path.resolve(__dirname, 'assets/frontsite/fonts')))
app.use('/frontsite/img', express.static(path.resolve(__dirname, 'assets/frontsite/img')))

app.use('/uploads/fontfiles', express.static(path.resolve(__dirname, 'uploads/fontfiles')))
app.use('/uploads/brushfiles', express.static(path.resolve(__dirname, 'uploads/brushfiles')))

app.use('/', require('./server/routes/router'))

app.listen(PORT, function(req, res){
    console.log(`Listen PORT : ${PORT}`)
})