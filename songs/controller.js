const importModel = require('./model');
var songs = importModel.songs;

const validateSong = (song) => {
    if(song.name && song.album && song.duration && song.artist){
        return true
    } else {
        return false
    }
}

// GET url-base/songs -> obtener lista de canciones en DB.
const listSongs = async(req, res) => {
    var getSongs = await songs.find({});
    if(getSongs.length > 0){
        res.send(getSongs);
    } else {
        res.status(404).send("No hay canciones.")
    }
}

// POST url-base/songs -> agregar canción mientras satisfaga el schema de songs.
const addSong = (req, res) => {
    var newSong = new songs(req.body);

    if(validateSong(newSong) == true){
        newSong.save(function(err){
            if(err){
                res.status(400).send("El formato de la canción es incorrecto.")
            } else {
                res.status(201)
                res.send("Canción agregada con éxito!")
            }
        })
    }
}

// PUT url-base/songs/:songname -> editar datos de canción.
const editSong = (req, res) => {
    console.log('ngifnyg')
    var songName = req.params.songname;
    var newSong = new songs(req.body);
    console.log('diughdsg')
    if(validateSong(newSong) == true){
        songs.updateOne({name: songName}, newSong, function(err){
            if(err){
                console.log('sgohfohb')
                res.status(400).send("Fallo edición de canción!")
            } else {
                console.log('ngpjupguj');
                res.send("Edición exitosa!");
            }
        })
    }
}

// DELETE url-base/songs/:songname -> eliminar canción.
const deleteSong = (req, res) => {
    var songName = req.params.songname;
    songs.deleteOne({name: songName}, (err) => {
        if(err){
            res.status(400).send("Error");
        } else {
            res.send("Eliminación exitosa!");
        }
    })
}

module.exports = {
   listSongs,
   addSong,
   editSong,
   deleteSong 
}