const mongoose = require('mongoose');
mongoose.connect('');  // example --> mongodb://0.0.0.0:0000/medic


const objectdb = mongoose.connection

//Exportar conexion mongoDB

objectdb.on('connected', () => {
    console.log('Conexion correcta a MongoDB');
});

objectdb.on('error', () => {
    console.log('Error en la conexion a MongoDB');
});

module.exports = mongoose