const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '39aee60769msh7264db8d8f420c2p190ff1jsn408b4a439a7e' }
    });

    const responseGet = await instance.get();

    if (responseGet.data.Results.length === 0) {
        throw new Error(`No hay resultados para: ${direccion}`);
    }
    const data = responseGet.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}