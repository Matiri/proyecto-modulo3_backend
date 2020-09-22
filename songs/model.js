var mongoose = require('../node_modules/mongoose');
const { mongo } = require('../node_modules/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: String,
    album: String,
    duration:String,
    artist: String
}, {collection: 'songs'})

mongoose.connect('mongodb+srv://MatiasRivas:okayibelieveyou@prueba-db.jozch.gcp.mongodb.net/songs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

var songs = mongoose.model('users', schema, 'users');

module.exports = {songs}