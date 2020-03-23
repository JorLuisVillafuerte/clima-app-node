    const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'DIreccion de la ciudad parao obtener el clima',
            demand: true
        }
    }).argv;
    module.exports = {
        argv
    };