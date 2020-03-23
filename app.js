const argv = require('./config/yargs').argv;
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


/*
getLugarLatLng(argv.direccion).
then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

getClima(-34.610001, -58.369999)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));*/

const getInfo = async(direccion) => {


    try {
        let lugar = await getLugarLatLng(direccion);
        let clima = await getClima(Number(lugar.lat), Number(lugar.lng));
        return `El clima de ${lugar} es de ${clima}`;
    } catch (error) {
        return `El clima de ${direccion} no se pudo determinar`;

    }
}

getInfo(argv.direccion).then((result) => {
    console.log(result);
}).catch((err) => { console.log(err); });