const axios = require('axios');


const getClima = async(lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3bf8d27b8d66e2a9f921f9bac353153f&units=metric`);
    return response.data.main.temp;
}
module.exports = {
    getClima
}