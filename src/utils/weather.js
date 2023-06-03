const request = require("request");

const weather = (city, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=ac9e4429660257255db7c74e929503b4&query='+encodeURIComponent(city);
    
    
    console.log(url);
    request({url, json: true}, (error, {body}) => {
      // const data = JSON.parse(response.body);
      if(error){
        callback("Unable to connect Internet", undefined);
      }else if(body.error){
        callback("API wrong IG",undefined);
      }else{
        // callback(undefined, "It is currently "+body.current.temperature + " celcius outside and the %age of rain is "+ body.current.precip);
        callback(undefined, {
          weather_descriptions: body.current.weather_descriptions,
          temperature: body.current.temperature,
          precip: body.current.precip
        });
      }
    });
  }

  module.exports = weather;