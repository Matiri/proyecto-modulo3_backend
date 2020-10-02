const express = require('express');
const cors = require('cors');
const usersController = require('./users/controller');
const songsController = require('./songs/controller');
const mongoose = require('mongoose');
var server = express();
server.use(express.json());
server.use(cors())
server.listen(4000);

// connect
mongoose.connect('mongodb+srv://MatiasRivas:okayibelieveyou@prueba-db.jozch.gcp.mongodb.net/proyecto-modulo3_backend?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

server.route('/')
    .get(usersController.listUsers)

server.route('/users')
    .post(usersController.addUser)

server.route('/songs')
    .get(songsController.listSongs)
    .post(songsController.addSong)

server.route('/users/:username')
    .put(usersController.editUser)
    .delete(usersController.deleteUser)

server.route('/:username/songs/:songid')
    .delete(usersController.removeFavorite)
    
server.route('/songs/:songname')
    .put(songsController.editSong)
    .delete(songsController.deleteSong)
