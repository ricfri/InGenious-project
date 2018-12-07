const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const app = express()

app.use(express.static('public'))
// app.use(favicon(path.join(__dirname,'/public/images/favicon.ico')))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/404.html'))
})

module.exports = app
