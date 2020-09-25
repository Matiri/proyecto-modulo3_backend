const express = require('express');
const usersController = require('./users/controller');
const mongoose = require('mongoose');
var server = express();
server.use(express.json());
server.listen(3000);

// connect
mongoose.connect('mongodb+srv://MatiasRivas:okayibelieveyou@prueba-db.jozch.gcp.mongodb.net/proyecto-modulo3_backend?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// route.js - rutas
server.route('/')
    .get(usersController.listUsers)

server.route('/users')
    .post(usersController.addUser)

server.route('/:username')
    .put(usersController.editUser)
    .delete(usersController.deleteUser)