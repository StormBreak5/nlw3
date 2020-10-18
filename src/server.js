const express = require('express');
const path = require('path');
const server = express();
const pages = require('./pages.js')

server
    .use(express.urlencoded({extended: true}))
    .use(express.static('public'))
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    .get('/', pages.index)
    .get('/error', pages.error)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

server.listen(5500)