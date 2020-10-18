const  axios = require('axios');

const getClima = async (lat,lng)=>{
   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5111672a5b371ec1fb9c5f1091571970&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}