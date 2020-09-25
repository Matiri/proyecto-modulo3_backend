var mongoose = require('../node_modules/mongoose');
var Schema = mongoose.Schema;
var songsModel = require('../songs/model');
var songs = songsModel.songs;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    favorite: [{type: Schema.ObjectId, ref: "Song"}]    
})
// una base de datos con dos colecciones

var users = mongoose.model("User", userSchema);

module.exports = {users}

/*
mongoose.connect('mongodb+srv://MatiasRivas:okayibelieveyou@prueba-db.jozch.gcp.mongodb.net/proyecto-modulo3_backend?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
*/