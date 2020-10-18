const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://rapidapi.p.rapidapi.com/weather?q=${encodeUlr}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '4e49498a1emsh4dc338e0f6bd11cp10f008jsn571cc20200b8',
                   'x-rapidapi-host':'community-open-weather-map.p.rapidapi.com'      }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}