var mongoose = require('../node_modules/mongoose');
const { mongo } = require('../node_modules/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: String,
    album: String,
    duration:String,
    artist: String
})
// una base de datos con dos colecciones

var songs = mongoose.model('Song', schema);

module.exports = {songs}