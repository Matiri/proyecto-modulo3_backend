const importModel = require('./model');
var users = importModel.users;

const validateUser = (user) => {
    if(user.firstName && user.lastName && user.email && user.age){
        return true
    } else {
        return false
    }
}

// GET url-base -> devuelve lista de usuarios.
const listUsers = async(req, res) => {
    var getUsers = await users.find({}).populate('favorite');
    if(getUsers.length > 0){
        res.send(getUsers)
    } else {
        res.status(404).send("No se encontraron usuarios.")
    }
}

// GET url-base/:username/songs -> dirigido a users para mostrar lista de canciones favoritas.
const listFavoriteSongs = async(req, res) => {
    var userName = req.params.username;
    var getUser = await users.find({firstName: userName});
    if(getUser.length > 0){
        res.send(getUser.favorite)
    } else {
        res.status(404).send("Este usuario no tiene canciones favoritas.")
    }
}

// DELETE url-base/:username/songs/:songname -> sacar canción de favoritos.
const removeFromFavorites = async(req, res) => {
    var userName = req.params.username;
    var songName = req.params.songname;
    var getFavorite = await users.find({firstName: userName, favorites: {name: songName}});
    if(getFavorite.length > 0){
        
    }
}

// POST url-base/users -> agregar usuario mientras satisfaga el schema de users.
const addUser = (req, res) => {
    const newUser = new users(req.body);

    if(validateUser(newUser) == true){
        newUser.save(function(err){
            if(err){
                res.status(400).send("El formato del usuario es incorrecto.")
            } else {
                res.status(201)
                res.send("Usuario agregado con éxito!")
            }
        })
    }
}

// PUT url-base/:username -> editar datos de usuario.
const editUser = (req, res) => {
    var userName = req.params.firstName;
    var newUser = new users(req.body);

    if(validateUser(newUser) == true) {
        users.updateOne({firstName: userName}, {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            }, function(err, obj){
            if(err){
                console.log(obj);
                res.status(400).send("Fallo edición de usuario!")
            } else {
                console.log(obj)
                res.send("Edición exitosa!");
            }
        })
    }
}

// DELETE url-base/:username -> eliminar usuario.
const deleteUser = (req, res) => {
    var userName = req.params.username;
    users.deleteOne({firstName: userName}, (err) => {
        if(err){
            res.status(400).send("Error")
        } else {
            res.send("Eliminación exitosa!");
        }
    })
}

module.exports = {
    listUsers,
    listFavoriteSongs,
    addUser,
    editUser,
    deleteUser
}

/*  
    {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    }
*/