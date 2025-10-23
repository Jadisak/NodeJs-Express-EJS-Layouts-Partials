// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path');

const app = express()
const port = 3030

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    res.render('index', { title: 'Home Page'})
})

app.get('/services', (req, res) => {
    res.render('services', { title: 'Services Page', layout: './layouts/sidebar' })
})

app.get('/info', (req, res) => {
    res.render('info', { title: 'Info Page', layout: './layouts/sidebar' })
})

// Listen on Port 3006
app.listen(port, () => console.info(`App listening on port ${port}`))