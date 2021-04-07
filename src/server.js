const express = require('express')
const server = express()
const routes = require('./routes')

const path = require('path')

server.set('views', path.join(__dirname, 'views'))

// usando template engine
server.set('view engine',  'ejs')

//habilitar arquivos statics
server.use(express.static('public'))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(5000, () => console.log('running on port 3000'))