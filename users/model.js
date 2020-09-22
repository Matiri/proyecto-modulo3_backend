var mongoose = require('../node_modules/mongoose');
var Schema = mongoose.Schema;
var songs = mongoose.model('songs');

var schema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    favorite: {type: Schema.ObjectId, ref: "songs"}    
}, {collection: 'users'})

mongoose.connect('mongodb+srv://MatiasRivas:okayibelieveyou@prueba-db.jozch.gcp.mongodb.net/users?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

var users = mongoose.model("users", schema, 'users');

module.exports = {users}