const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=27245cf8ecfedd9612cfcda5b42a5fb6&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degrees out.  It feels like ' + 
                body.current.feelslike + ' degrees out.' + ' The wind is ' + body.current.wind_speed + ' ' +  body.current.wind_dir)
        }
    })
}

module.exports = forecast;