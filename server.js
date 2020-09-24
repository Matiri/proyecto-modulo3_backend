const express = require('express');
const songsController = require('./songs/controller');
const usersController = require('./users/controller');
var server = express();
server.use(express.json());
server.listen(3000);
// connect
// route.js - rutas
server.route('/')
    